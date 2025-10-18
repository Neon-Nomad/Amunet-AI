const { Pool } = require('pg');

/**
 * PostgreSQL connection pool configured via environment variables.
 *
 * DB_USER, DB_HOST, DB_NAME, DB_PASSWORD and DB_PORT must be set in
 * the environment or in your .env file. The Pool will manage a pool
 * of client connections to the database for you.
 */
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;