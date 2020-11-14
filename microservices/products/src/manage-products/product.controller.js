const ProductService = require('./product.service');

class ProductController {
    constructor() {
        this.productService = new ProductService();
    }

    createProduct= async (req, res) => {
        try {
            const productDetails = req.body;
            await this.productService.createProduct(productDetails);
            return res.json({'result': 'success'});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: 'Failed', message: 'Error creating Products' });
        }
    } 

    updateProduct= async (req, res) => {
        try {
            const productId = req.params.productId
            const productDetails = req.body;
            await this.productService.updateProduct(productDetails, productId);
            return res.json({'result': 'success'});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: 'Failed', message: 'Error updating Products' });
        }
    } 

    deleteProduct= async (req, res) => {
        try {
            const productId = req.params.productId
            await this.productService.deleteProduct(productId);
            return res.json({'result': 'success'});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: 'Failed', message: 'Error updating Products' });
        }
    } 

    retrieveAllProducts= async (req, res) => {
        try {
            const productDetails = req.body;
            const result = await this.productService.retrieveAllProducts(productDetails);
            return res.json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: 'Failed', message: 'Error retrieve all Products' });
        }
    } 

    retrieveProduct= async (req, res) => {
        try {
            const productDetails = req.query;
            const result = await this.productService.retrieveProduct(productDetails);
            return res.json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: 'Failed', message: 'Error retrieve all Products' });
        }
    } 
}

module.exports = ProductController;