const jwt = require("jsonwebtoken");

const generateToken = async (id) => {
  return await jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: "4d",
  });
};

module.exports = generateToken;
