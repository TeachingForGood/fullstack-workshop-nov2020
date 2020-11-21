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

module.exports = {
    INSERT_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, SELECT_ALL_PRODUCT, SELECT_PRODUCT, SELECT_PRODUCT_BY_ID
};