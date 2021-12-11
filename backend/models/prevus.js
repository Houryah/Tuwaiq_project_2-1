const mongoose = require("mongoose");

const prevusSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },

  CenterOffice: {
    type: String,
    required: true,
    trim: true,
  },
  TestMechanisim: {
    type: String,
    required: true,
    trim: true,
  },
  AttendanceStatus: {
    type: String,
    required: true,
    trim: true,
  },
  AppointmentStatus: {
    type: String,
    required: true,
    trim: true,
  },
  TestDate: {
    type: Date,
    required: true,
    trim: true,
  },
  PaymentMethod: {
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
module.exports.prevus = mongoose.model(prevus, prevusSchema);
