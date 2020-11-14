const DatabaseService = require('../database/database.service');

class ProductService {
    INSERT_PRODUCT = `
        INSERT INTO Products.products (name, price, description) VALUES(?, ?, ?);
    `;

    UPDATE_PRODUCT = `
        UPDATE Products.products set name = ?, price = ? , description= ? where id = ?;
    `;

    DELETE_PRODUCT = `
        DELETE FROM Products.products where id = ?;
    `;

    SELECT_ALL_PRODUCT = `
        SELECT id, name, price, description FROM Products.products;
    `;

    SELECT_PRODUCT = `
        SELECT id, name, price, description FROM Products.products where name like ?;
    `;

    SELECT_PRODUCT_BY_ID = `
        SELECT id, name, price, description FROM Products.products where id = ?;
    `;

    constructor() {
        this.databaseService = new DatabaseService();
    }

    async createProduct({ name, price, description }) {
        try {
            // Insert into Products
            const { insertId } = await this.databaseService.query(this.INSERT_PRODUCT, 
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
            const { updateId } = await this.databaseService.query(this.UPDATE_PRODUCT, 
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
            const { deleteId } = await this.databaseService.query(this.DELETE_PRODUCT, 
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
            const result = await this.databaseService.query(this.SELECT_ALL_PRODUCT);
      
            return result;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }

    async retrieveProduct({ name }) {
        try {
            // Insert into Products
            const result = await this.databaseService.query(this.SELECT_PRODUCT, [ `${name}%` ]);
      
            return result;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }

    async retrieveProductById(id) {
        try {
            // Insert into Products
            const result = await this.databaseService.query(this.SELECT_PRODUCT_BY_ID, [ id ]);
      
            return result;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }
}

module.exports = ProductService;
