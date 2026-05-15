-- Create the database
CREATE DATABASE IF NOT EXISTS portfolio_db;

-- Use the database
USE portfolio_db;

-- Create the contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Note: The backend is configured to automatically create this table 
-- if it doesn't exist when the server starts.
