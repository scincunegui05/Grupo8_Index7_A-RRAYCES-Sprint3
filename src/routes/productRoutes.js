const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')


router.get('/detail/:id', productController.detalle) //armamos ruta parametrizada
router.get('/edit/:id', productController.editar)
router.get('/create', productController.crear)

module.exports = router; 
