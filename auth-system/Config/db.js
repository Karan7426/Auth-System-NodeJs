// config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Ensure environment variables are loaded

const sequelize = new Sequelize(
  process.env.MYSQL_DB, // Database name
  process.env.MYSQL_USER, // Database user
  process.env.MYSQL_PASSWORD, // Database password
  {
    host: process.env.MYSQL_HOST, // Database host
    dialect: 'mysql', // Database dialect
    logging: false // Optional: Set to true to see SQL queries in the console
  }
);

module.exports = sequelize;
