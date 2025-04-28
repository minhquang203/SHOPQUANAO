const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { CreateSuccessRes, CreateErrorRes } = require('../utils/responseHandler');

exports.register = async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;

        // Check if passwords match
        if (password !== confirmPassword) {
            return CreateErrorRes(res, 'Passwords do not match', 400);
        }

        // Check if user exists
        const existingUser = await User.findOne({ 
            $or: [{ email }, { username }] 
        });

        if (existingUser) {
            return CreateErrorRes(res, 'User already exists', 400);
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            role: 'user' 
        });

        // Generate token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        CreateSuccessRes(res, {
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        }, 201);
    } catch (error) {
        CreateErrorRes(res, error.message, 500);
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check user exists
        const user = await User.findOne({ email });
        if (!user) {
            return CreateErrorRes(res, 'Invalid credentials', 401);
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return CreateErrorRes(res, 'Invalid credentials', 401);
        }

        // Generate token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        CreateSuccessRes(res, {
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        CreateErrorRes(res, error.message, 500);
    }
};