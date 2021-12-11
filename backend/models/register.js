const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  AppointmentStatus: {
    type: String,
    required: true,
    trim: true,
  },
  TestLanguage: {
    type: String,
    required: true,
    trim: true,
  },
  TestTypeMechanism: {
    type: String,
    required: true,
    trim: true,
  },
  TestDate: {
    type: Date,
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
module.exports.register = mongoose.model(register, registerSchema);
