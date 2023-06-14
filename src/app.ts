import express from 'express';

import productsRoutes from './routes/productsRoutes';
import usersRoutes from './routes/usersRoutes';
import orderRoutes from './routes/ordersRoutes';

const app = express();

app.use(express.json());

app.use('/', productsRoutes);
app.use('/', usersRoutes);
app.use('/', orderRoutes);

export default app;
