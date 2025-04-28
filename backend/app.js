const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/auth', require('./routes/auth'));

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(' Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(' Error:', err.message);
  res.status(500).json({
    success: false,
    message: err.message
  });
});

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});

module.exports = app;