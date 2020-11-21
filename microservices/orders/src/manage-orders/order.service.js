const DatabaseService = require('../database/database.service');

class OrderService {
    INSERT_CREATE = `
        INSERT INTO Products.orders (product_id, count, status) VALUES(?, ?, ?);
    `;

    UPDATE_ORDER = `
        UPDATE Products.orders set product_id = ?, count = ? , status = ? where id = ?;
    `;

    DELETE_ORDER = `
        DELETE FROM Products.orders where id = ?;
    `;

    SELECT_ALL_ORDER = `
        SELECT p.id as productId, p.name, p.price, o.count, o.status, o.id as orderId
        FROM Products.products as p 
        inner join Products.orders as o on p.id = o.product_id;
    `;

    SELECT_ORDER = `
        SELECT p.id as productId, p.name, p.price, o.count, o.status, o.id as orderId
        FROM Products.products as p 
        inner join Products.orders as o on p.id = o.product_id
        where p.name like ?;
    `;

    SELECT_ORDER_BY_ID = `
        SELECT p.id as productId, p.name, p.price, o.count, o.status, o.id as orderId
        FROM Products.products as p 
        inner join Products.orders as o on p.id = o.product_id
        where o.id = ?;
    `;

    constructor() {
        this.databaseService = new DatabaseService();
    }

    async createProduct({ productId, count, status }) {
        try {
            // Insert into Products
            const { insertId } = await this.databaseService.query(this.INSERT_CREATE, 
                [ productId, count, status ]);
      
            // Return just the insertId
            return insertId;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }

    async updateOrder({ productId, count, status }, orderId) {
        try {
            // Insert into Products
            const { updateId } = await this.databaseService.query(this.UPDATE_ORDER, 
                [ productId, count, status, orderId ]);
      
            return updateId;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }

    async deleteOrder(productId) {
        try {
            // Insert into Products
            const { deleteId } = await this.databaseService.query(this.DELETE_ORDER, 
                [ productId ]);
      
            return deleteId;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }

    async retrieveAllOrders() {
        try {
            // Insert into Products
            const result = await this.databaseService.query(this.SELECT_ALL_ORDER);
      
            return result;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }

    async retrieveOrder({ name }) {
        try {
            // Insert into Products
            const result = await this.databaseService.query(this.SELECT_ORDER, [ `${name}%` ]);
      
            return result;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }

    async retrieveOrderById(id) {
        try {
            // Insert into Products
            const result = await this.databaseService.query(this.SELECT_ORDER_BY_ID, [ id ]);
      
            return result;
          } catch (error) {
            console.error(error);
            throw error;
          }
    }
}

module.exports = OrderService;
