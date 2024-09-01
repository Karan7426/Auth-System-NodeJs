const express = require('express');
const sequelize = require('./Config/db');  
const User = require('./models/User');  

const app = express();

// Middleware
app.use(express.json());  

// Routes
app.use('/api/auth', require('./routes/authRoutes'));  



// Synchronize models with the database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.error('Error synchronizing the database:', err);
  });



// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);  
  res.status(500).json({ message: 'Internal Server Error' });  
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
