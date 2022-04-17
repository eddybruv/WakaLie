const express = require("express");
const UserModel = require("./../models/User.model");

const router = express.Router();

router.post("/create_account", (req, res) => {
  const body = req.body;
  const user = new UserModel(body);
  user.save();
  res.json({ message: "User account created", data: user });
});

router.post("/login", async (req, res) => {
  const { number, password } = req.body;
  const isUserFound = await UserModel.findOne({
    number: number,
    password: password,
  });

  res.json(
    isUserFound
      ? { message: "User found", user: isUserFound }
      : { message: "User not found" }
  );
});

// update user
router.put("/update_profile", async (req, res) => {
  const { _id } = req.body;
  const updateUser = await UserModel.findOneAndUpdate(
    { _id: _id },
    { ...req.body }
  );
  res.send(updateUser);
});

// delete user
router.delete("/delete_user", async (req, res) => {
  const { _id, password } = req.body;
  const deleteUser = await UserModel.findOneAndDelete(
    { _id: _id, password: password },
    { ...req.body }
  );
  res.send(
    deleteUser.deleteCount > 0
      ? { success: true, user: 'User deleted' }
      : { success: false, message: "Could not delete user" }
  );
});

module.exports = router;
