const { Router } = require('express');
const router = new Router();
const ordersRoutes = require('./orders.route');

router.use('/order', ordersRoutes);

module.exports = router;