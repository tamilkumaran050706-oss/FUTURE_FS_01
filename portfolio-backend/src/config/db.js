const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'portfolio_db',
};

const pool = mysql.createPool(dbConfig);

const connectDB = async () => {
  try {
    // First, connect without a database to ensure it exists
    const connection = await mysql.createConnection({
      host: dbConfig.host,
      user: dbConfig.user,
      password: dbConfig.password,
    });
    
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\`;`);
    await connection.end();

    // Now check the pool connection
    const poolConn = await pool.getConnection();
    console.log('Connected to MySQL database');
    poolConn.release();
  } catch (error) {
    console.error(`Database Error: ${error.message}`);
    // If it's just a connection error, we don't exit here so nodemon can retry
  }
};

module.exports = { pool, connectDB };
