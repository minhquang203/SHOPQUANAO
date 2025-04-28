const express = require('express');
import { register } from '../controllers/authController.js';
import validateRegister from '../middleware/validateRegister.js';

const router = express.Router();

router.post('/register', validateRegister, register);

export default router;
