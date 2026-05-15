const { pool } = require('../config/db');

const Contact = {
  create: async (contactData) => {
    const { name, email, subject, message } = contactData;
    const sql = `INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)`;
    const [result] = await pool.execute(sql, [name, email, subject, message]);
    return result;
  },

  // Method to create the table if it doesn't exist
  initTable: async () => {
    const sql = `
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await pool.execute(sql);
  }
};

module.exports = Contact;
