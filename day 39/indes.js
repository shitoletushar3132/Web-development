const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/test");

main()
  .then((res) => {
    console.log("connect successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findOne({ age: { $gt: 47 } })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

User.findById("6659c0728368b0925f0ed7a7")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// User.updateOne({ _id: "6659c0728368b0925f0ed7a7" }, { age: 45 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

User.findByIdAndDelete("6659c14b3ff63ec1f84e78bf").then((res) => {
  console.log(res);
});

// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 29 },
//   { name: "Peter", email: "peter@gmail.com", age: 39 },
//   { name: "rj", email: "rj@gmail.com", age: 20 },
// ]).then((res) => {
//   console.log(res);
// });

// const user1 = new User({ name: "Adam", email: "adam@yahoo.in", age: 48 });
// const user2 = new User({ name: "Eve", email: "eve@yahoo.in", age: 50 });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
