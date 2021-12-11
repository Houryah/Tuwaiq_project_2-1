const mongoose = require("mongoose");

const resulteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  TestDate: {
    type: Date,
    required: true,
    trim: true,
  },
  TestScore: {
    type: Number,
    required: true,
    trim: true,
  },
  nationalID: {
    type: Date,
    unique: true,
    required: true,
    trim: true,
  },
});
module.exports.resulte = mongoose.model(resulte, resulteSchema);
