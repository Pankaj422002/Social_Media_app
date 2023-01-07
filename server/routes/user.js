import express from 'express';
import { register, signin } from '../controller/users.js';


const router = express.Router();

router.post('/signin',signin);
router.post('/register',register);

export default router;