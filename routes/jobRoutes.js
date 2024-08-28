const express = require('express');
const Job = require('../models/Job');

const router = express.Router();

// Endpoint to get job roles based on qualifications and preferences
router.get('/search', async (req, res) => {
  const { qualifications, location, type } = req.query;

  try {
    // Find jobs that match the user's qualifications and preferences
    const jobs = await Job.find({
      requiredQualifications: { $in: qualifications.split(',') }, // Split qualifications by commas
      location: location,
      type: type,
    });

    res.status(200).json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Error fetching jobs' });
  }
});

module.exports = router;
