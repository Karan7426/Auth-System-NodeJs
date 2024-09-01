const express = require('express');
const { register, login, getCurrentUser } = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../validators/authValidator');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);
router.get('/me', authMiddleware, getCurrentUser);  

module.exports = router;
