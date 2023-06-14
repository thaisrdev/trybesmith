import Order from '../interfaces/ordersInterfaces';
import connection from '../models/connection';
import OrderModel from '../models/ordersModels';

export default class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  getAll(): Promise<Order[]> {
    return this.model.getAll();
  }
}