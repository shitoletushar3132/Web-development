const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  let user = await User.findOne({ username: "tusharshitole_" });

  let post2 = new Post({
    content: "i learn mern",
    likes: 4639999,
  });

  post2.user = user;

  await post2.save();
};

// addData();

const getData = async () => {
  let res = await Post.find({}).populate("user","username");
  console.log(res);
};

getData();
