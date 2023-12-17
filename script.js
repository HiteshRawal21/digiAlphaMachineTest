const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 5000;

const user_routes = require("./userRoutes/userRoutes");

mongoose.connect("mongodb://localhost/digiAlphaMachineTestDb");

app.use(express.json({ limit: "50mb" }));
app.use("/api/user", user_routes);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} Is connected!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
