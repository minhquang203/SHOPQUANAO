const { CreateErrorRes } = require('../utils/responseHandler');

exports.validateRegister = (req, res, next) => {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
        return CreateErrorRes(res, 'Please fill in all fields', 400);
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