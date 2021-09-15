const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
  user: String,
  title: { 
    type: String, 
    required: true, 
    maxlength: 60 
  },
  comment: { 
    type: String, 
    required: true, 
    maxlength: 300 
  }
})