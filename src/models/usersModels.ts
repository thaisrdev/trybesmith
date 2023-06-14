import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/usersInterfaces';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(user: User): Promise<User> {
    const { username, vocation, level, password } = user;
    const query = `
    INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
    const result = await this.connection.execute<ResultSetHeader>(
      query,
      [username, vocation, level, password],
    );
    const [header] = result;
    const { insertId } = header;

    return { id: insertId, ...user };
  }
}