const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  requiredQualifications: { type: [String], required: true },
  location: { type: String, required: true },
  type: { type: String, required: true }, // e.g., Full-Time, Part-Time
  postedDate: { type: Date, default: Date.now },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
