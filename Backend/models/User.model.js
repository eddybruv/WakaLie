const mongoose = require("mongoose");

//  create user
const UserSchema = new mongoose.Schema({
  name: String,
  gender: String,
  dob: Date,
  number: Number,
  password: String,
});

module.exports = mongoose.model('user', UserSchema);