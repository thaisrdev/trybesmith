import { Request, Response } from 'express';
import ProductsService from '../services/productsServices';

export default class ProductsController {
  service: ProductsService;

  constructor() {
    this.service = new ProductsService();
    this.cadastro = this.cadastro.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  async cadastro(req: Request, res: Response): Promise<void> {
    const produto = req.body;
    const cadastrar = await this.service.cadastro(produto);

    res.status(201).json(cadastrar);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const products = await this.service.getAll();

    res.status(200).json(products);
  }
}