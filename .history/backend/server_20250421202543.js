const cors = require('cors');
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const express = require('express');

import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
