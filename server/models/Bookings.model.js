const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  User: String,

  date: { 
    type: String, 
    required: true, 
  },

  time: { 
    type: String, 
    required: true
  }
})

const Bookings = model("Bookings", bookingsSchema);

module.exports = Bookings;