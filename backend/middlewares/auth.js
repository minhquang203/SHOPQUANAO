const jwt = require('jsonwebtoken');
const { CreateErrorRes } = require('../utils/responseHandler');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return CreateErrorRes(res, 'Not authorized to access this route', 401);
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (err) {
            return CreateErrorRes(res, 'Not authorized to access this route', 401);
        }
    } catch (error) {
        CreateErrorRes(res, 'Authentication error', 500);
    }
};