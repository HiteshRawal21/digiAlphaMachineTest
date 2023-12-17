const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  email: String,
  phone: Number,
});

module.exports = mongoose.model("User", userSchema);
