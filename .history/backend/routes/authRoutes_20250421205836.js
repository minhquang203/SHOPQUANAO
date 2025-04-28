const express = require('express');
import validateRegister from '../middleware/validateRegister.js';
import { register } from './controller/authController.js';

const router = express.Router();

router.post('/register', validateRegister, register);

export default router;
