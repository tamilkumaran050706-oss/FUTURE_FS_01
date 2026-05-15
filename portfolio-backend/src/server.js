const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const Contact = require('./models/contactModel');
const app = require('./app');

// Load environment variables
dotenv.config();

// Connect to Database and Initialize Tables
const startServer = async () => {
  try {
    await connectDB();
    
    // Create contacts table if not exists
    await Contact.initTable();
    console.log('Database tables initialized');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
