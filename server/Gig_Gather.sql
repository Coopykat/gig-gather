-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema GigGather_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema GigGather_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `GigGather_db` DEFAULT CHARACTER SET utf8 ;
USE `GigGather_db` ;

-- -----------------------------------------------------
-- Table `GigGather_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GigGather_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `mail` VARCHAR(90) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GigGather_db`.`events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GigGather_db`.`events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `artist_name` VARCHAR(45) NOT NULL,
  `date` DATETIME NULL,
  `location` VARCHAR(90) NULL,
  `comment` LONGTEXT NULL,
  `users_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_events_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_events_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `GigGather_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
