// const { urlencoded } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

require('dotenv').config()

const connection = mongoose.connect(
  process.env.MONGODB_URL
);

// app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));

const UserRouter = require("./routes/User.router");
const PostRouter = require("./routes/Post.router");

app.use(express.json());
app.use(express.urlencoded());

app.use(cors());
connection.then(() => console.log("Connection successful"));
connection.catch(() => console.log("connection unsuccessful"));

const PORT = process.env.PORT || 8000;

app.use("/api/user", UserRouter);
app.use("/api/post", PostRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, console.log(`Running on port ${PORT}`));
