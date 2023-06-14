import { Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import UserService from '../services/usersServices';

export default class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const user = req.body;
    const created = await this.service.createUser(user);
    const { username, vocation, level } = created;
    const payload = { username, vocation, level };
    const token = jwt.sign(payload, process.env.JWT_SECRET as Secret);
    res.status(201).json({ token });
  }
}