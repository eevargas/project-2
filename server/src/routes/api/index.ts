import { Router } from 'express';
import { userRouter } from './user-routes.js';

const router = Router();

// /api/users
router.use('/users', userRouter);

export default router;
