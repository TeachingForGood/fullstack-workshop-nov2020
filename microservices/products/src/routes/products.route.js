const { Router } = require('express');
const ProductController = require('../manage-products/product.controller');

const router = new Router();
const productController = new ProductController();

router.get('/all', productController.retrieveAllProducts);

router.get('/search', productController.retrieveProduct);

router.post('/create', productController.createProduct);

router.put('/update', productController.updateProduct);

router.delete('/delete', function (req, res) {
    res.send('Got a delete product request')
})

module.exports = router;