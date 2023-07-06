const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const databaseConnection = require("./mongoDb");
const mongoose = require("mongoose");
const authenticationRoute = require("./routes/auth/authentication");

const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());

databaseConnection();

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.once("open", () => {
  console.log("Database Successfully Connected");
});

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "This is Hii Social Media Application Backend" });
});

app.use("/auth", authenticationRoute);

app.listen(process.env.PORT, () => {
  console.log(`server listening on http://localhost:${process.env.PORT}`);
});
