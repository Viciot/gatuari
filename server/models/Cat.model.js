const { Schema, model } = require("mongoose");

const catSchema = new Schema({
  name: String,

  image: String,
  
  race: String,

  size: String,

  birth_date: String,

  arrival_date: String,

  color: String,

  country: String,

  city: String,

  register_number: String,

  description: String,

  bookings: [{type: Schema.Types.ObjectId, ref: 'bookings', default: []}]
})

const Cat = model("Cat", catSchema);

module.exports = Cat;