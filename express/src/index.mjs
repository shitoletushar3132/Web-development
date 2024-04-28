import express, { request } from "express";
import { query, validationResult } from "express-validator";
const app = express();
app.use(express.json());

const loggingMiddleWare = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
};

app.get("/", loggingMiddleWare, (req, res) => {
  res.send("<h1>hello</h1>");
});

const resolveIndexByUserId = (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;
  const parseId = parseInt(id);

  if (isNaN(parseId)) {
    return res.sendStatus(400);
  }

  const findUserIndex = data.findIndex((user) => user.id === parseId);

  if (findUserIndex === -1) return res.sendStatus(404);
};

const data = [
  { id: 1, name: "tusahr", age: 21 },
  { id: 2, name: "vicky", age: 21 },
  { id: 3, name: "kunal", age: 21 },
  { id: 4, name: "om", age: 21 },
  { id: 5, name: "abhi", age: 21 },
  { id: 6, name: "chetan", age: 21 },
  { id: 7, name: "sangam", age: 21 },
  { id: 8, name: "tusahr", age: 21 },
  { id: 9, name: "tusahr", age: 21 },
];

app.get("/api/users", query("filter").isString().notEmpty().withMessage('not empty').isLength({min:3,max:10}).withMessage("at least 3 to 10"), (req, res) => {
    const result = validationResult(req);
    console.log(result);
  const {
    query: { filter, value },
  } = req;
  if (!filter && !value) return res.send(data);

  if (filter && value) {
    return res.send(data.filter((user) => user[filter].includes(value)));
  }
});

app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).send({ msg: "bad rquest" });
  }

  const finduser = data.find((user) => user.id === id);
  if (!finduser) return res.sendStatus(404);

  return res.send(finduser);
});

app.post("/api/users", (req, res) => {
  const { body } = req;
  const newUser = { id: data[data.length - 1].id + 1, ...body };
  data.push(newUser);
  return res.status(201).send(newUser);
});

app.put("/api/users/:id", (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const parseId = parseInt(id);

  if (isNaN(parseId)) {
    return res.sendStatus(400);
  }

  const findUserIndex = data.findIndex((user) => user.id === parseId);

  if (findUserIndex === -1) return res.sendStatus(404);

  data[findUserIndex] = { id: parseId, ...body };

  return res.sendStatus(200);
});

app.patch("/data", (req, res) => {
  res.sendStatus(404);
});

app.patch("/api/users/:id", (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  const parseId = parseInt(id);

  if (isNaN(parseId)) {
    return res.sendStatus(400);
  }

  const findUserIndex = data.findIndex((user) => user.id === parseId);

  if (findUserIndex === -1) return res.sendStatus(404);

  // Create a new object instead of mutating the existing one
  const updatedUser = { ...data[findUserIndex], ...body };

  data[findUserIndex] = updatedUser;

  return res.sendStatus(200);
});

app.delete("/api/users/:id", (req, res) => {
  const {
    params: { id },
  } = req;

  const parseId = parseInt(id);

  if (isNaN(parseId)) {
    return res.sendStatus(400);
  }

  const findUserIndex = data.findIndex((user) => user.id === parseId);

  if (findUserIndex === -1) return res.sendStatus(404);

  data.splice(findUserIndex);
  return res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
