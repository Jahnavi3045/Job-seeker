const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  resume: { type: String, required: true } // Store file path or URL
});

const User = mongoose.model('User', userSchema);

module.exports = User;
