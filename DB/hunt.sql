-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema huntDB
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `huntDB` ;

-- -----------------------------------------------------
-- Schema huntDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `huntDB` DEFAULT CHARACTER SET utf8 ;
USE `huntDB` ;

-- -----------------------------------------------------
-- Table `hunt`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hunt` ;

CREATE TABLE IF NOT EXISTS `hunt` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `property_name` VARCHAR(45) NULL,
  `size` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER hunt@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'hunt'@'localhost' IDENTIFIED BY 'hunt@localhost';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'hunt'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `hunt`
-- -----------------------------------------------------
START TRANSACTION;
USE `huntDB`;
INSERT INTO `hunt` (`id`, `property_name`, `size`) VALUES (1, 'Jacob', '2 Acres');

COMMIT;

