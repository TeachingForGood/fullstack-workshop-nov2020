const { Router } = require('express');
const ProductController = require('../manage-products/product.controller');

const router = new Router();
const productController = new ProductController();

router.get('/all', productController.retrieveAllProducts);

router.get('/search', productController.retrieveProduct);

router.post('/create', productController.createProduct);

router.put('/update/:productId', productController.updateProduct);

router.delete('/delete/:productId', productController.deleteProduct);

module.exports = router;