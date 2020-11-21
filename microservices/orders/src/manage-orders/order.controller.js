const OrderService = require('./order.service');

class ProductController {
    constructor() {
        this.orderService = new OrderService();
    }

    createOrder= async (req, res) => {
        try {
            const orderDetails = req.body;
            const orderData = await this.orderService.createProduct(orderDetails);
            return res.json({orderId: orderData});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: 'Failed', message: 'Error creating Orders' });
        }
    } 

    updateOrder= async (req, res) => {
        try {
            const orderId = req.params.orderId
            const orderDetails = req.body;
            await this.orderService.updateOrder(orderDetails, orderId);
            return res.json({'result': 'success'});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: 'Failed', message: 'Error updating Products' });
        }
    } 

    deleteProduct= async (req, res) => {
        try {
            const orderId = req.params.orderId
            await this.orderService.deleteOrder(orderId);
            return res.json({'result': 'success'});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: 'Failed', message: 'Error updating Products' });
        }
    } 

    retrieveAllOrders= async (req, res) => {
        try {
            const orderDetails = req.body;
            const result = await this.orderService.retrieveAllOrders(orderDetails);
            return res.json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: 'Failed', message: 'Error retrieve all Orders' });
        }
    } 

    retrieveOrder= async (req, res) => {
        try {
            const orderDetails = req.query;
            const result = await this.orderService.retrieveOrder(orderDetails);
            return res.json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: 'Failed', message: 'Error retrieve all Orders' });
        }
    } 

    retrieveOrderById = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await this.orderService.retrieveOrderById(id);
            return res.json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: 'Failed', message: 'Error retrieve all Orders' });
        }
    } 
}

module.exports = ProductController;