const mongoose = require('mongoose');

// You need to create a new schema and assign it the following
// constant
const ProductSchema = new mongoose.Schema({
    name: { // field name
      type: String, // data type
      required: true // validation
    },
    description: { // field name
      type: String, // field type
      required: false // validation
    },
    price: { // field name
      type: Number, // field type
      required: true
    }
  });

module.exports = mongoose.model('Product', ProductSchema);