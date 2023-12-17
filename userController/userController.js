const User = require("../userModel/userModel");

async function registerUser(req, res) {
  try {
    const user = new User({
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
    });

    const result = await user.save();
    res.status(200).json({
      Message: "User Registered Successfully!",
      Info: result,
    });
  } catch (error) {
    res.status(500).json({
      Message: "User Registration Failed!",
      Error: error,
    });
  }
}

async function getUserById(req, res) {
  try {
    const result = await User.findById(req.params.id);
    res.status(200).json({
      Message: "User Found!",
      Info: result,
    });
  } catch (err) {
    res.status(500).json({
      Message: "User Not Found!",
      Error: err,
    });
  }
}

async function updateUser(req, res) {
  try {
    const result = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstname,
          lastName: req.body.lastname,
          email: req.body.email,
          phone: req.body.phone,
        },
      }
    );
    const resultGet = await User.findById(req.params.id);
    res.status(200).json({
      Message: "User Data Updated!",
      Info: resultGet,
    });
  } catch (err) {
    res.status(500).json({
      Message: "User Update Failed!",
      Error: err,
    });
  }
}

async function deleteUser(req, res) {
  try {
    const result = await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      Message: "User deleted Successfully!",
      Info: result,
    });
  } catch (err) {
    res.status(500).json({
      Message: "User Delete Failed!",
      Error: err,
    });
  }
}

async function getAllUsers(req, res) {
  try {
    const result = await User.find(req.query);
    res.status(200).json({
      Message: "Users fetched Successfully!",
      Info: result,
    });
  } catch (err) {
    res.status(500).json({
      Message: "Users Not Found!",
      Error: err,
    });
  }
}

module.exports = {
  registerUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
};
