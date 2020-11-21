const DatabaseService = require('../database/database.service');
const productQueries = require('./product.query');

class ProductService {
    constructor() {
        this.databaseService = new DatabaseService();
    }

    async createProduct({ name, price, description }) {
        try {
            // Insert into Products
            const { insertId } = await this.databaseService.query(productQueries.INSERT_PRODUCT, 
                [ name, price, description ]);
      
            // Return just the insertId
            return insertId;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }

    async updateProduct({ name, price, description }, productId) {
        try {
            // Insert into Products
            const { updateId } = await this.databaseService.query(productQueries.UPDATE_PRODUCT, 
                [ name, price, description, productId ]);
      
            return updateId;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }

    async deleteProduct(productId) {
        try {
            // Insert into Products
            const { deleteId } = await this.databaseService.query(productQueries.DELETE_PRODUCT, 
                [ productId ]);
      
            return deleteId;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }

    async retrieveAllProducts() {
        try {
            // Insert into Products
            const result = await this.databaseService.query(productQueries.SELECT_ALL_PRODUCT);
      
            return result;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }

    async retrieveProduct({ name }) {
        try {
            // Insert into Products
            const result = await this.databaseService.query(productQueries.SELECT_PRODUCT, [ `${name}%` ]);
      
            return result;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }

    async retrieveProductById(id) {
        try {
            // Insert into Products
            const result = await this.databaseService.query(productQueries.SELECT_PRODUCT_BY_ID, [ id ]);
      
            return result;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }
}

module.exports = ProductService;
