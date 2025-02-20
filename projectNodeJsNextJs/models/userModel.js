const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'doctor', 'patient'], required: true },
  telephone: { type: String }, // For patients only
  adresse: { type: String },   // For patients only
  specialite: { type: String }, // For doctors only
  tarif: { type: Number },      // For doctors only
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
