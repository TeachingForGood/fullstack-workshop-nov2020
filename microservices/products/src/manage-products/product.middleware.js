const ProductService = require('./product.service');

class ProductMiddleware {
    constructor() {
        this.productService = new ProductService();
    }

    validateCreate= async (req, res, next) =>  {
        const productDetails = req.body;
        let errorList = [];
        let isError = false;
        if (!productDetails.name || productDetails.name.trim() === '') {
            isError = true;
            errorList.push('Name cannot be Empty')
        }

        if (!productDetails.price || !Number.isInteger(productDetails.price) || productDetails.price < 0 ) {
            isError = true;
            errorList.push('Price is invalid')
        }

        if (!productDetails.description || productDetails.description.trim() === '') {
            isError = true;
            errorList.push('Description cannot be Empty')
        }

        if (isError) {
            res.status(400).json({ message: errorList });
        } else {
            next();
        }
    }

    validateUpdate= async (req, res, next) =>  {
        const productDetails = req.body;
        let errorList = [];
        let isError = false;
        
        const result = await this.productService.retrieveProductById(req.params.productId);
        if (result && result.length === 0) {
            isError = true;
            errorList.push('Id is invalid')
        }

        if (!productDetails.name || productDetails.name.trim() === '') {
            isError = true;
            errorList.push('Name cannot be Empty')
        }

        if (!productDetails.price || !Number.isInteger(productDetails.price) || productDetails.price < 0 ) {
            isError = true;
            errorList.push('Price is invalid')
        }

        if (!productDetails.description || productDetails.description.trim() === '') {
            isError = true;
            errorList.push('Description cannot be Empty')
        }

        if (isError) {
            res.status(400).json({ message: errorList });
        } else {
            next();
        }
    }

    validateDelete= async (req, res, next) =>  {
        const productDetails = req.body;
        let errorList = [];
        let isError = false;
        
        const result = await this.productService.retrieveProductById(req.params.productId);
        if (result && result.length === 0) {
            isError = true;
            errorList.push('Id is invalid')
        }

        if (isError) {
            res.status(400).json({ message: errorList });
        } else {
            next();
        }
    }
}

module.exports = ProductMiddleware;