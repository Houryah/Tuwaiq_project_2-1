const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  nationalID: {
    type: Number,
    required: true,
    trim: true,
  },
  password: {
    type: Number,
    required: true,
    trim: true,
  },
  role: {
    type: mongoose.SchemaTypes.ObjectId, ref:'role'},
});



module.exports.users = mongoose.model("users", usersSchema);
