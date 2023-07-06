const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
  },
});

userSchema.pre("save", async function () {
  const salt = await bcryptjs.genSalt(10);
  return (this.password = await bcryptjs.hash(this.password, salt));
});

userSchema.methods.comparePassword = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

const user = mongoose.model("user", userSchema);

module.exports = user;
