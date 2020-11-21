const { Router } = require('express');
const OrderController = require('../manage-orders/order.controller');
const OrderMiddleware = require('../manage-orders/order.middleware');

const router = new Router();
const orderController = new OrderController();
const orderMiddleware = new OrderMiddleware();

router.get('/all', orderController.retrieveAllOrders);

router.get('/search', orderController.retrieveOrder);

router.get('/:id', orderController.retrieveOrderById);

router.post('/create', orderMiddleware.validateCreate, orderController.createOrder);

router.put('/update/:orderId', orderMiddleware.validateUpdate, orderController.updateOrder);

router.delete('/delete/:orderId', orderMiddleware.validateDelete, orderController.deleteProduct);

module.exports = router;