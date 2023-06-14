import { Response, Request } from 'express';
import OrderService from '../services/ordersServices';

export default class OrderController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
    this.getAll = this.getAll.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const result = await this.service.getAll();    
    res.status(200).json(result);
  }
}