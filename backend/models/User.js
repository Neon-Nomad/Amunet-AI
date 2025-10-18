const pool = require('../config/db');
const bcrypt = require('bcryptjs');

/**
 * User model encapsulates database operations for the users table. It
 * uses bcrypt to hash passwords before storing them in the database.
 */
class User {
  /**
   * Create a new user record in the database.
   *
   * @param {string} email - The user's email address.
   * @param {string} password - The user's plaintext password.
   * @returns {Promise<Object>} The inserted user record (id and email).
   */
  static async create(email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const { rows } = await pool.query(
      'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email',
      [email, hashedPassword]
    );
    return rows[0];
  }

  /**
   * Find a user in the database by email address.
   *
   * @param {string} email - The email to search for.
   * @returns {Promise<Object|null>} The user record or null if not found.
   */
  static async findByEmail(email) {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return rows[0] || null;
  }
}

module.exports = User;