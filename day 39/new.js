const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

main()
  .then(() => {
    console.log("connect successful");
  })
  .catch((err) => {
    console.log(err);
  });

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min:[1,"price is too low for amazon selling"]
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["friction", "non-fiction"],
  },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  title: "Science XII",
  price: 1200,
  category:"comics",
});

book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
