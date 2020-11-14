const { Router } = require('express');
const ProductController = require('../manage-products/product.controller');
const ProductMiddleware = require('../manage-products/product.middleware');

const router = new Router();
const productController = new ProductController();
const productMiddleware = new ProductMiddleware();

router.get('/all', productController.retrieveAllProducts);

router.get('/search', productController.retrieveProduct);

router.post('/create', productMiddleware.validateCreate, productController.createProduct);

router.put('/update/:productId', productMiddleware.validateUpdate, productController.updateProduct);

router.delete('/delete/:productId', productMiddleware.validateDelete, productController.deleteProduct);

module.exports = router;