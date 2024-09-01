const express = require('express');
const sequelize = require('./Config/db'); // Corrected path (use lowercase 'config')
const User = require('./models/User'); // Import the User model (optional, but can be useful)

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/auth', require('./routes/authRoutes')); // Define your routes here

// Synchronize models with the database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.error('Error synchronizing the database:', err);
  });

// Start the server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
