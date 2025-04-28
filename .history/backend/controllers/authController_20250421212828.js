const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Đăng ký người dùng mới
const bcrypt = require('bcryptjs'); // Thêm bcrypt để mã hóa mật khẩu

const registerUser = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // Kiểm tra nếu mật khẩu và xác nhận mật khẩu không khớp
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Mật khẩu và xác nhận mật khẩu không khớp' });
  }

  // Kiểm tra nếu người dùng đã tồn tại
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'Email đã tồn tại' });
  }

  // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    // Tạo người dùng mới
    const user = await User.create({ username, email, password: hashedPassword });
    
    // Trả về thông tin người dùng và token
    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),  // Đảm bảo đã có hàm generateToken() để tạo JWT token
      });
    } else {
      res.status(400).json({ message: 'Lỗi khi tạo người dùng' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Có lỗi khi tạo người dùng', error: error.message });
  }
};


// Đăng nhập
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: 'Thông tin đăng nhập không hợp lệ' });
  }
};

// Tạo JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = { registerUser, loginUser };
