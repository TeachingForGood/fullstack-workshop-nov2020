const { Router } = require('express');
const router = new Router();
const productsRoutes = require('./products.route');

router.use('/product', productsRoutes);

module.exports = router;