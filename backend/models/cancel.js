const mongoose = require("mongoose");
const Schema = mongoose;

const cancleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  CenterOfficeLocation: {
    type: String,
    required: true,
    trim: true,
  },
  Date: {
    type: Date,
    required: true,
    trim: true,
  },
  CancellationTime: {
    type: Date,
    required: true,
    trim: true,
  },
  TestTypeMechanism: {
    type: String,
    required: true,
    trim: true,
  },
  CancellationReason: {
    type: String,
    required: true,
    trim: true,
  },
  nationalID: {
    type: Number,
    unique: true,
    required: true,
    trim: true,
  },
});

module.exports.cancle = mongoose.model(cancle, cancleSchema);
