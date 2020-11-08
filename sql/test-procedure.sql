CREATE DEFINER=`root`@`localhost` PROCEDURE `test_procedure`(
		IN productName varchar(45),
        IN productPrice INT,
        IN productDesc varchar(200),
        IN totalOrdered INT
)
BEGIN
	DECLARE finished INTEGER DEFAULT 0;
	DECLARE latestProductId INTEGER DEFAULT 0;
    DEClARE curProducts 
		CURSOR FOR 
			SELECT max(id) prodId FROM `Products`.`products`;
	
    -- declare NOT FOUND handler
	DECLARE CONTINUE HANDLER
    FOR NOT FOUND SET finished = 1;
    
    INSERT INTO `Products`.`products` (`name`, `price`, `description`) VALUES (productName, productPrice, productDesc);
	
    OPEN curProducts;
    
    getProducts: LOOP
		FETCH curProducts INTO latestProductId;
		IF finished = 1 THEN 
			LEAVE getProducts;
		END IF;
	END LOOP getProducts;
	CLOSE curProducts;
    
    select latestProductId;
	Select * from `Products`.products;
    
    INSERT INTO `Products`.`orders` (`count`, `product_id`, `status`) VALUES (totalOrdered, latestProductId, 'ordered');
    
	SELECT * FROM `Products`.`orders`;
END