import User from '../interfaces/usersInterfaces';
import connection from '../models/connection';
import UserModel from '../models/usersModels';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  createUser(user: User): Promise<User> {
    return this.model.create(user);
  }
}