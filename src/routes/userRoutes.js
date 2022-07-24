const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/register', userController.registrarse)
router.get('/login', userController.loguearse)
router.get('/cart', userController.carrito)

module.exports = router; 
