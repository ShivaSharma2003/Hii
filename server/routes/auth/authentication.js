const express = require("express");
const userSchema = require("../../schema/userSchema");
const generateToken = require("../../utils/generateToken");

const router = express.Router();

router.post("/api/register/user", async (req, res) => {
  const { email, password, fullName, userName } = req.body;
  try {
    const existEmail = await userSchema.findOne({ email: email });
    if (existEmail) {
      return res.status(403).json({ message: "email already exist" });
    }

    const newUser = await userSchema.create({
      email,
      password,
      fullName,
      userName,
    });

    if (newUser) {
      res.status(200).json(newUser);
    } else {
      return res.status(500).json({ message: "internal server error" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
});

router.post("/api/login/user", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existEmail = await userSchema.findOne({ email: email });
    if (!existEmail) {
      return res.status(404).json({ errorMessage: "userEmail not Found!" });
    }

    if (existEmail && (await existEmail.comparePassword(password))) {
      return res
        .status(200)
        .json({ token: await generateToken(existEmail._id) });
    } else {
      return res
        .status(403)
        .json({ errorMessage: "Email or Password is incorrect" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errorMessage: "Internal Server error" });
  }
});

module.exports = router;
