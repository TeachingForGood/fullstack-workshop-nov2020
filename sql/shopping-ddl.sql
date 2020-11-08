CREATE SCHEMA `Products`;

CREATE TABLE `Products`.`products` (
  `id` INT NULL,
  `name` VARCHAR(45) NOT NULL,
  `price` VARCHAR(45) NULL);


ALTER TABLE `Products`.`products` 
ADD COLUMN `description` VARCHAR(200) NULL AFTER `price`;

DROP TABLE `Products`.`products`;

ALTER TABLE `Products`.`products` 
DROP COLUMN `description`;

TRUNCATE `Products`.`products`;



ALTER TABLE `Products`.`products` 
CHANGE COLUMN `name` `name` VARCHAR(45) NOT NULL ;

ALTER TABLE `Products`.`products` 
ADD UNIQUE INDEX `name_UNIQUE` (`name` ASC);

ALTER TABLE `Products`.`products` 
CHANGE COLUMN `id` `id` INT NOT NULL ,
ADD PRIMARY KEY (`id`);


CREATE TABLE `Products`.`orders` (
  `id` INT NOT NULL,
  `count` INT NOT NULL,
  `product_id` INT NULL,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


ALTER TABLE `Products`.`orders` 
ADD INDEX `product_fk_idx_unq` (`product_id` ASC) VISIBLE;
;

ALTER TABLE `Products`.`orders` 
ADD CONSTRAINT `product_unique_fk`
  FOREIGN KEY (`product_id`)
  REFERENCES `Products`.`products` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `Products`.`products` 
ADD CONSTRAINT `product_price_ck`
  CHECK(price>0);

ALTER TABLE `Products`.`products` 
CHANGE COLUMN `id` `id` INT NOT NULL AUTO_INCREMENT ;
