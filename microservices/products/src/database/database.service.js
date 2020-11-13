const mySqlConnector = require('./mysql.connector');
const databaseConnection = new mySqlConnector().getInstance().getConnection();

/**
 * Handles MySql query related logic
 *
 * @class DatabaseService
 */
class DatabaseService {
  databaseConnection = null;

  constructor() {
    this.databaseConnection = databaseConnection;
  }

  /**
   * Uses passed in query and params to execute query
   * @param {String} query
   * @param {any[]} params
   * @memberof DatabaseService
   */
  query = async (query, params) => {
    try {
      const [rows] = await this.databaseConnection.query(query, params);

      return rows;
    } catch (error) {
      console.log('Failure in query: ', error);

      throw error;
    }
  };
}

module.exports = DatabaseService;
