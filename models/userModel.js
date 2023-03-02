const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("Email and Password must be filled");
  }

  // check email and password
  if (!validator.isEmail(email)) {
    throw Error("Invalid Email");
  }

  // strong password (lowercase, uppercase, numbser, symbol, minimum 8+ chars)
  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Password is not strong, try to combain uppercase, lowercase, number, symbol and minimum 8+ characters"
    );
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email already used");
  }

  // encrypt password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // create user
  const user = await this.create({ email, password: hash });

  return user;
};

module.exports = mongoose.model("User", userSchema);
