const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { CreateSuccessRes, CreateErrorRes } = require('../utils/responseHandler');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        if (!user) {
            return CreateErrorRes(res, 'Invalid credentials', 401);
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return CreateErrorRes(res, 'Invalid credentials', 401);
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        CreateSuccessRes(res, { token, user: {
            id: user._id,
            username: user.username,
            email: user.email
        }});
    } catch (error) {
        CreateErrorRes(res, error.message, 500);
    }
};

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ 
            $or: [{ email }, { username }] 
        });

        if (existingUser) {
            return CreateErrorRes(res, 'User already exists', 400);
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        CreateSuccessRes(res, { token, user: {
            id: user._id,
            username: user.username,
            email: user.email
        }}, 201);
    } catch (error) {
        CreateErrorRes(res, error.message, 500);
    }
};