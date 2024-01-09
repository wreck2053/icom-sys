const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  ID: {
    type: Number,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Usage: {
    type: String,
    required: true,
  },
  Brand: {
    type: String,
    required: true,
  },
  Capacity: {
    type: String,
    required: true,
  },
  Desc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("product", schema);
