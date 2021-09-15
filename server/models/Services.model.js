const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  title: String,

  image: String,

  description: String
})

const Services = model("Services", serviceSchema);

module.exports = Services;