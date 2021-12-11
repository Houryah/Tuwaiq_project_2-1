const mongoose = require("mongoose");

const availableSchema = new mongoose.Schema({
  name: {
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
});

module.exports.available = mongoose.model(available, availableSchema);
