const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateLogin, validateRegister } = require('../middlewares/validator');
const { protect } = require('../middlewares/auth');

// Auth routes
router.post('/register', validateRegister, authController.register);
router.post('/login', validateLogin, authController.login);
router.get('/me', protect, authController.getMe);
router.post('/logout', protect, authController.logout);

module.exports = router;