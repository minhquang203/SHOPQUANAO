import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const registerUser = async (req, res) => {
    const { fullName, email, password, confirmPassword } = req.body;
  
    if (!fullName || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
  
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
  
    // Check email exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
  
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Save user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });
  
    await newUser.save();
  
    res.status(201).json({ message: "User registered successfully" });
  };
  

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
