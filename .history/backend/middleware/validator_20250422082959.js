const { CreateErrorRes } = require('../utils/responseHandler');

exports.validateRegister = (req, res, next) => {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
        return CreateErrorRes(res, 'Please fill in all fields', 400);
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return CreateErrorRes(res, 'Please provide a valid email', 400);
    }

    // Password validation
    if (password.length < 6) {
        return CreateErrorRes(res, 'Password must be at least 6 characters', 400);
    }

    if (password !== confirmPassword) {
        return CreateErrorRes(res, 'Passwords do not match', 400);
    }

    next();
};

exports.validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return CreateErrorRes(res, 'Please provide email and password', 400);
    }

    next();
};