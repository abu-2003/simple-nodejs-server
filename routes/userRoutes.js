const express = require('express');
const {
  registerUser,
  loginUser,
  getUsers,
  getUserDetails,
} = require('../controllers/userController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', protect, getUsers);
router.get('/:id', protect, getUserDetails);

module.exports = router;
