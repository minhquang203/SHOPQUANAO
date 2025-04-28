const { CreateErrorRes } = require('../utils/responseHandler');

exports.validateRegister = (req, res, next) => {
    const { username, email, password, confirmPassword } = req.body;

    // Check empty fields
    if (!username || !email || !password || !confirmPassword) {
        return CreateErrorRes(res, 'Vui lòng điền đầy đủ thông tin', 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return CreateErrorRes(res, 'Email không hợp lệ', 400);
    }

    // Validate password
    if (password.length < 6) {
        return CreateErrorRes(res, 'Mật khẩu phải có ít nhất 6 ký tự', 400);
    }

    // Check password match
    if (password !== confirmPassword) {
        return CreateErrorRes(res, 'Mật khẩu xác nhận không khớp', 400);
    }

    next();
};

exports.validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return CreateErrorRes(res, 'Vui lòng điền đầy đủ email và mật khẩu', 400);
    }

    next();
};