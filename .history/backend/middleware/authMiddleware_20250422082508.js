const jwt = require('jsonwebtoken');
const { CreateErrorRes } = require('../utils/responseHandler');

exports.protect = async (req, res, next) => {
    try {
        // Get token from header
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return CreateErrorRes(res, 'Không có quyền truy cập', 401);
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if (decoded.expire < Date.now()) {
            return CreateErrorRes(res, 'Token đã hết hạn', 401);
        }

        req.user = decoded;
        next();
    } catch (error) {
        CreateErrorRes(res, 'Token không hợp lệ', 401);
    }
};