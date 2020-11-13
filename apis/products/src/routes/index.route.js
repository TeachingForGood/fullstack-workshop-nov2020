const { Router } = require('express');
const router = new Router();
const productsRoutes = require('./products.route');
const ordersRoutes = require('./orders.route');

router.use('/product', productsRoutes);
router.use('/order', ordersRoutes);

module.exports = router;