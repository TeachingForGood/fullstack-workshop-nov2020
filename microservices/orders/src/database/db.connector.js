var mysql = require('mysql');

// #region MySQL Connection Helpers
let dbConn;

async function initDBConnection() {
  return new Promise(async (resolve, reject) => {
    try {
      dbConn = mysql.createPool({
        connectionLimit: 5,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
      });
      resolve(true);
    } catch (err) {
      console.log('Failure in creating DB connection pool:', err);
      reject(err);
    }
  });
}

module.exports = {
  initDBConnection
}