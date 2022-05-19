const express = require("express");
const PostModel = require("../models/Post.model");

const router = express.Router();

// create post
router.post("/create_post", (req, res) => {
  const { user_id, message } = req.body;
  const post = new PostModel({ user_id: user_id, message: message });
  post.save();

  res.json({ message: "Post created", data: post });
});

// get users' post
router.post("/user_posts", async (req, res) => {
  const { _id } = req.body;
  const posts = await PostModel.find({user_id: _id}).populate({path: 'user_id'})
  res.json(posts);
})

// see post
router.get("/get_post", async (req, res) => {
  const posts = await PostModel.find({})
  .populate({path: 'user_id', select: '-password'});
  res.json(posts);
});

// update post
router.put("/update_post", async (req, res) => {
  const { _id } = req.body;
  const updatedPost =  await PostModel.findOneAndUpdate({ _id: _id }, {...req.body});

  res.json({ message: "Post updated", data: updatedPost });
});

// delete post
router.delete("/delete_post", async (req, res) => {
  const {_id} = req.body;
  const deletePost = await PostModel.findOneAndDelete({_id: _id}, {...req.body});
  res.json({ message: "Post deleted", data: deletePost });
})
module.exports = router;
