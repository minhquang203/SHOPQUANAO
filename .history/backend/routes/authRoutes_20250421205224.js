import express from 'express';
import { register } from '../controller/authController.js';
import validateRegister from '../middleware/validateRegister.js';

const router = express.Router();

router.post('/register', validateRegister, register);

export default router;
