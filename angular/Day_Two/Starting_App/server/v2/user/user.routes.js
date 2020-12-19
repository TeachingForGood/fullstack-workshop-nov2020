const express = require('express');
const userController = require('./user.controller');
const checkAuth = require('./auth.middleware');
const router = express.Router();

router.post('/signup', userController.userSignUp);
router.post('/login', userController.userLogin);

module.exports = router;
