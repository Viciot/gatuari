const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: String,

  image: String,

  price: Number,

  sice: String,

  variety: String,

  quantity: Number,

  description: Number,

  reviews: [{type: Schema.Types.ObjectId, ref: 'Review', default: []}]
})

const Product = model("Cat", productSchema);

module.exports = Product;