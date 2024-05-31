const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const method_override = require("method-override");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(method_override("_method"));

async function connection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
connection()
  .then((res) => {
    console.log("connect successful");
  })
  .catch((err) => {
    console.log(err);
  });

//index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});
app.get("/", (req, res) => {
  res.send("start");
});

//New Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//create route
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });

  newChat
    .save()
    .then((res) => {
      console.log("chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  let chat = await Chat.findById(id);
  console.log(chat);
  res.render("edit.ejs", { chat });
});

//update route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg, created_at: new Date() },
    { runvalidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});

//delete route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

app.listen(3000, () => {
  console.log("server started at port 3000");
});
