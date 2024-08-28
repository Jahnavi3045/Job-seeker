const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const User = require('../models/User');

router.post('/signup', upload.single('resume'), async (req, res) => {
  const { name, email, phone } = req.body;
  const resume = req.file?req.file.path:null;

  console.log('Request Body:', req.body);
  console.log('Uploaded File:', req.file);

  if (!name || !email || !phone || !resume) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = new User({ name, email, phone, resume });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Error occurred while saving user data', error });
  }
});

module.exports = router;
