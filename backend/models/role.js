const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    role: { type: String, required: true },
    permissions: { type: Array, required: true },
  });
  
  module.exports.role = mongoose.model("Role", roleSchema);
  