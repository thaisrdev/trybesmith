import { Router } from 'express';
import ProductsController from '../controllers/productsControllers';

const router = Router();
const productsController = new ProductsController();

router.post('/products', productsController.cadastro);
router.get('/products', productsController.getAll);

export default router;