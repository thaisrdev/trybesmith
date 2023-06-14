import { Router } from 'express';
import UserControllers from '../controllers/usersControllers';

const router = Router();
const userControllers = new UserControllers();

router.post('/users', userControllers.create);

export default router;