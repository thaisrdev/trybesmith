import { createPool } from 'mysql2/promise';

const connection = createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

export default connection;
