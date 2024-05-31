const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const methodOverride = require("method-override");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "",
});

let getRandomUser = () => {
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

app.get("/", (req, res) => {
  let q = "SELECt COUNT(*) FROM user";

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["COUNT(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      // console.log(result);
      res.render("showuser.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

app.get("/user/:id/edit/", (req, res) => {
  let id = req.params.id;

  let q = `SELECT * FROM user WHERE id="${id}"`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

//add user route
app.get("/user/new", (req, res) => {
  res.render("newuser.ejs");
});

app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;

  let q = "INSERT INTO user (id,username,email,password) VALUES ?";

  let data = [[uuidv4(), username, email, password]];
  try {
    connection.query(q, [data], (err, reuslt) => {
      if (err) throw err;
      console.log(reuslt);
      res.redirect("/");
    });
  } catch (err) {
    console.log(err);
  }

  console.log(username);
  console.log(password);
});

//update route
app.patch("/user/:id", (req, res) => {
  let id = req.params.id;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id="${id}"`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("wrong password entered");
      } else {
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = "${id}"`; // fixed query
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

app.get("/user/:id", (req, res) => {
  let { id } = req.params;
  res.render("delete.ejs", { id });
});

app.delete("/user/:id", (req, res) => {
  let id = req.params.id;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id="${id}"`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("wrong password entered");
        res.redirect("/user");
      } else {
        let q2 = `DELETE FROM user WHERE id = "${id}"`; // fixed query
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

app.listen(3000, () => {
  console.log("server is listen on port : 3000");
});

// let data = [];
// for (let i = 0; i <= 100; i++) {
//   data.push(getRandomUser());
// }
// //inserting new data
// let q = "INSERT INTO user (id,username,email,password) VALUES ?";
// try {
//   connection.query(q, [data], (err, reuslt) => {
//     if (err) throw err;
//     console.log(reuslt);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();
