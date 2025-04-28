const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Khởi tạo biến môi trường
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
