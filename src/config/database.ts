// src/config/database.ts

import { Sequelize } from 'sequelize';

// Initialize Sequelize instance with MySQL credentials
const sequelize = new Sequelize(
  'grocery_booking', // Database name
  'root', // Username
  'password', // Password
  {
    host: 'localhost', // Database host
    dialect: 'mysql',  // Dialect (MySQL)
    logging: false,    // Disable logging of queries (optional)
    dialectOptions: {
      charset: 'utf8mb4', // You can adjust based on your DB needs
    },
  }
);

export default sequelize;
