import { Pool } from 'mysql2/promise';
import Order from '../interfaces/ordersInterfaces';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Order[]> {
    const query = `SELECT  orders.id, orders.user_id as userId, 
    JSON_ARRAYAGG(products.id) as productsIds 
    FROM Trybesmith.orders JOIN Trybesmith.products 
    ON products.order_id = orders.id GROUP BY orders.id`;
    const [result] = await this.connection.execute(query);
    return result as Order[];
  }
}