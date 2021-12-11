const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
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
  password: {
    type: Number,
    required: true,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    trim: true,
  },
});
module.exports.users = mongoose.model(users, usersSchema);
