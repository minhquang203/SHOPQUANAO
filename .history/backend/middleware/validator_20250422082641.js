const { CreateErrorRes } = require('../utils/responseHandler');

exports.validateRegister = (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return CreateErrorRes(res, 'Vui lòng điền đầy đủ thông tin', 400);
    }

    if (password.length < 6) {
        return CreateErrorRes(res, 'Mật khẩu phải có ít nhất 6 ký tự', 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return CreateErrorRes(res, 'Email không hợp lệ', 400);
    }

    next();
};

exports.validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return CreateErrorRes(res, 'Vui lòng điền đầy đủ thông tin', 400);
    }

    next();
};