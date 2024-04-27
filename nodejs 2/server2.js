import { createServer } from "http";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jim Doe" },
];

//logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

//JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

//route handler for POST /api/users
const createUserHandler = (req,res)=>{
    let body ='';
    //listen for data
    req.on('data',(chunk)=>{
        body += chunk.toString();
    });

    req.on('end',()=>{
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}
//route handler for /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
}
//route handler for GET/api/user/:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(user));
    res.end();
  } else {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "user not found" }));
    res.end();
  }
};

//not found

const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "route not found" }));
  res.end();
};
const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === `/api/users` && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserByIdHandler(req, res);
      } else if(req.url === `/api/users` && req.method === "POST"){
        createUserHandler(req,res);
      }else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(3000, () => {
  console.log("server start");
});
