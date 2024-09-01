// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db'); // Import the configured Sequelize instance

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true // Ensure the email is valid
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true, // Optional: Add timestamps to track createdAt and updatedAt
});

module.exports = User;
