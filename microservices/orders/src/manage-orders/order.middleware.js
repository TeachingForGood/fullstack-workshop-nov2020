const OrderService = require('./order.service');

class OrderMiddleware {
    constructor() {
        this.orderService = new OrderService();
    }

    validateCreate= async (req, res, next) =>  {
        const orderDetails = req.body;
        let errorList = [];
        let isError = false;
        
        if (!orderDetails.productId || !Number.isInteger(orderDetails.productId) || orderDetails.productId < 0 ) {
            isError = true;
            errorList.push('Product Id is invalid')
        }

        if (!orderDetails.count || !Number.isInteger(orderDetails.count) || orderDetails.count < 0 ) {
            isError = true;
            errorList.push('Count is invalid')
        }

        if (!orderDetails.status || orderDetails.status.trim() === '') {
            isError = true;
            errorList.push('Status cannot be Empty')
        }

        if (isError) {
            res.status(400).json({ message: errorList });
        } else {
            next();
        }
    }

    validateUpdate= async (req, res, next) =>  {
        const orderDetails = req.body;
        let errorList = [];
        let isError = false;
        
        const result = await this.orderService.retrieveOrderById(req.params.orderId);
        if (result && result.length === 0) {
            isError = true;
            errorList.push('Order id is invalid')
        }

        if (!orderDetails.productId || !Number.isInteger(orderDetails.productId) || orderDetails.productId < 0 ) {
            isError = true;
            errorList.push('Product Id is invalid')
        }

        if (!orderDetails.count || !Number.isInteger(orderDetails.count) || orderDetails.count < 0 ) {
            isError = true;
            errorList.push('Count is invalid')
        }

        if (!orderDetails.status || orderDetails.status.trim() === '') {
            isError = true;
            errorList.push('Status cannot be Empty')
        }

        if (isError) {
            res.status(400).json({ message: errorList });
        } else {
            next();
        }
    }

    validateDelete= async (req, res, next) =>  {
        let errorList = [];
        let isError = false;
        
        const result = await this.orderService.retrieveOrderById(req.params.orderId);
        if (result && result.length === 0) {
            isError = true;
            errorList.push('Order id is invalid')
        }

        if (isError) {
            res.status(400).json({ message: errorList });
        } else {
            next();
        }
    }
}

module.exports = OrderMiddleware;