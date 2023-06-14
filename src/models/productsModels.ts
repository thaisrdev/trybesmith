import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/productsInterfaces';

export default class ProductsModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async cadastro(product: Product): Promise<Product> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const result = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const [header] = result;
    const { insertId } = header;

    return { id: insertId, ...product };
  }

  async getAll(): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.products';
    const [result] = await this.connection.execute(query);
    return result as Product[];
  }
}