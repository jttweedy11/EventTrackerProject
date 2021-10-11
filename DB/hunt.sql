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
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `size` VARCHAR(255) NULL DEFAULT NULL,
  `notes` VARCHAR(255) NULL,
  `url` VARCHAR(1000) NULL DEFAULT NULL,
  `event_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS hunt@localhost;
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
INSERT INTO `hunt` (`id`, `name`, `size`, `notes`, `url`, `event_date`) VALUES (1, 'Jacob', '2 Acres', NULL, NULL, NULL);

COMMIT;

