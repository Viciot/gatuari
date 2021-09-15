const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String
  },
  surname: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  image: String,
  birth_date: String,
  password: String,
});

const User = model("User", userSchema);

module.exports = User;
