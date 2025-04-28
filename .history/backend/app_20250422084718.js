const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
const result = dotenv.config();
if (result.error) {
  throw new Error('Could not find .env file');
}

// Check required env vars
if (!process.env.MONGO_URI) { // Changed from MONGODB_URI to MONGO_URI
  throw new Error('MONGO_URI is required in environment variables');
}

const authRoutes = require('./routes/auth');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoutes);

// Connect to MongoDB with options
mongoose.connect(process.env.MONGO_URI, { // Changed from MONGODB_URI to MONGO_URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});