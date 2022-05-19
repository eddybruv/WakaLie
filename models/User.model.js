const mongoose = require("mongoose");

//  create user
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String },
  dob: { type: Date, required: true },
  number: { type: Number, required: true },
  password: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("user", UserSchema);
