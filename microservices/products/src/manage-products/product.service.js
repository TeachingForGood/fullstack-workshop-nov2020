const DatabaseService = require('../database/database.service');

class ProductService {
    INSERT_PRODUCT = `
        INSERT INTO Products.products (name, price, description) VALUES(?, ?, ?);
    `;

    UPDATE_PRODUCT = `
        UPDATE Products.products set name = ?, price = ? , description= ? where name = ?;
    `;

    SELECT_ALL_PRODUCT = `
        SELECT name, price, description FROM Products.products;
    `;

    SELECT_PRODUCT = `
        SELECT name, price, description FROM Products.products where name like ?;
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

    async updateProduct({ name, price, description }) {
        try {
            // Insert into Products
            const { updateId } = await this.databaseService.query(this.UPDATE_PRODUCT, 
                [ name, price, description, name ]);
      
            return updateId;
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
}

module.exports = ProductService;
