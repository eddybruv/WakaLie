const mongoose = require("mongoose");

//  create post
const PostSchema = new mongoose.Schema(
  {
    message: String,
    user_id: { type: mongoose.ObjectId, ref: "user" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", PostSchema);
