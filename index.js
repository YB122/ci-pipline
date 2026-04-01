import express from "express";
import { dataBaseConnection } from "./database/connection.js";
import { userModel } from "./database/model/user.model.js";
import { postModel } from "./database/model/post.model.js";
import mongoose from "mongoose";
let app = express();
app.use(express.json());
dataBaseConnection();

app.get("/get-users", async (req, res) => {
  let users = await userModel.find();
  if (users.length) {
    res.status(200).json({ success: true, data: users });
  } else {
    res.status(400).json({ success: false, message: "not found users" });
  }
});

app.post("/add-user", async (req, res) => {
  let { name, email, password } = req.body;

  let findEmail = await userModel.findOne({ email });
  if (findEmail) {
    return res
      .status(400)
      .json({ success: false, message: "email already exists" });
  }
  let addUser = await userModel.insertMany({ email, name, password });
  if (addUser) res.status(200).json({ success: true, data: addUser });
  else res.status(400).json({ success: false, message: "users not added" });
});

app.get("/get-user-by-id/:id", async (req, res) => {
  let { id } = req.params;
  let getUser = await userModel.findById(id);
  if (getUser) {
    res.status(200).json({ success: true, data: getUser });
  } else {
    res.status(400).json({ success: false, message: "user not found" });
  }
});

app.delete("/delete-user-by-id/:id", async (req, res) => {
  let { id } = req.params;
  let deleteUser = await userModel.findByIdAndDelete(id);
  if (deleteUser)
    res.status(200).json({ success: true, message: "deleted successfully" });
  else res.status(400).json({ success: false, message: "user not found" });
});

app.patch("/update-user-by-id/:id", async (req, res) => {
  let { id } = req.params;
  let { name, email, password } = req.body;
  let all = {};
  name ? (all.name = name) : null;
  email ? (all.email = email) : null;
  password ? (all.password = password) : null;
  let updateUser = await userModel.findByIdAndUpdate(id, all, { new: true });
  if (updateUser)
    res.status(200).json({
      success: true,
      message: "updated successfully",
      data: updateUser,
    });
  else res.status(400).json({ success: false, message: "user not found" });
});

app.get("/get-posts", async (req, res) => {
  let posts = await postModel.find();
  if (posts.length) {
    res.status(200).json({ success: true, data: posts });
  } else {
    res.status(400).json({ success: false, message: "not found users" });
  }
});

app.post("/add-post", async (req, res) => {
  let { title, content, userId } = req.body;

  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(400).json({ success: false, message: "user not found" });
  }
  let addPost = await postModel.insertMany({ title, content, userId });
  if (addPost) res.status(200).json({ success: true, data: addPost });
  else res.status(400).json({ success: false, message: "post not added" });
});

app.get("/get-post-by-id/:id", async (req, res) => {
  let { id } = req.params;
  let postFound = await postModel.findById(id);
  if (postFound) {
    res.status(200).json({ success: true, data: postFound });
  } else {
    res.status(400).json({ success: false, message: "post not found" });
  }
});

app.delete("/delete-post-by-id/:id", async (req, res) => {
  let { id } = req.params;
  let postDeleted = await postModel.findByIdAndDelete(id, { new: true });
  if (postDeleted) res.status(200).json({ success: true });
  else res.status(400).json({ success: false, message: "post not delete" });
});

app.patch("/update-post-by-id/:id", async (req, res) => {
  let { id } = req.params;
  let { title, content, userId } = req.body;
  let postFound = await postModel.findById(id);
  if (postFound.userId == userId) {
    let all = {};
    title ? (all.title = title) : null;
    content ? (all.content = content) : null;
    let editPost = await postModel.findByIdAndUpdate(id, all, { new: true });
    if (editPost) res.status(200).json({ success: true, editPost });
    else res.status(400).json({ success: false, message: "post not edit" });
  } else {
    return res
      .status(400)
      .json({ success: false, message: "user id is wrong" });
  }
});

export const server = app.listen(3000, () => {
  console.log("server 3000 open");
});

export default app;
