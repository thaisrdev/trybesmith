import { Router } from 'express';
import OrdersControllers from '../controllers/ordersControllers';

const router = Router();
const ordersControllers = new OrdersControllers();

router.get('/orders', ordersControllers.getAll);

export default router;