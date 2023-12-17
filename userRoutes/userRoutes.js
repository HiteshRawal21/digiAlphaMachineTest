const express = require("express");
const router = express.Router();
const {
  registerUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../userController/userController");

router.route("/insert").post(registerUser);
router.route("/getById/:id").get(getUserById);
router.route("/updateUser/:id").put(updateUser);
router.route("/deleteUser/:id").delete(deleteUser);
router.route("/getAllUsers").get(getAllUsers);

module.exports = router;
