import { Product } from '../interfaces/productsInterfaces';
import ProductsModel from '../models/productsModels';
import connection from '../models/connection';

export default class ProductsService {
  model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  cadastro(product: Product): Promise<Product> {
    return this.model.cadastro(product);
  }

  getAll(): Promise<Product[]> {
    return this.model.getAll();
  }
}