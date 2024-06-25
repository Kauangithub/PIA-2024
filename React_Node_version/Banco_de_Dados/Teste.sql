-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Pia_2024
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Pia_2024
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS Pia_2024 DEFAULT CHARACTER SET utf8 ;
USE Pia_2024 ;

-- -----------------------------------------------------
-- Table Pia_2024.Cadastro_ingresso
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Pia_2024.Cadastro_ingresso (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  descricao LONGTEXT NOT NULL,
  preco DECIMAL(4,2) NOT NULL,
  img LONGTEXT NOT NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table Pia_2024.Ingresso
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Pia_2024.Ingresso (
  id INT NOT NULL AUTO_INCREMENT,
  id_ingresso INT NOT NULL,
  nome_prof VARCHAR(45) NOT NULL,
  email VARCHAR(100) NOT NULL,
  qtd INT NOT NULL,
  data_ingresso DATE NOT NULL,
  data_compra DATETIME NOT NULL,
  preco_total DECIMAL(4,2) NOT NULL,
  preco DECIMAL(4,2) NOT NULL,
  CONSTRAINT FK_id_ingresso FOREIGN KEY (id_ingresso) REFERENCES Cadastro_ingresso(id),
  PRIMARY KEY (id))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO Cadastro_ingresso (nome, descricao, preco, img) VALUES ('Teste01', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 10, 'Teste01.jpg');
INSERT INTO Cadastro_ingresso (nome, descricao, preco, img) VALUES ('Teste02', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 20, 'Teste02.jpg');
INSERT INTO Cadastro_ingresso (nome, descricao, preco, img) VALUES ('Teste03', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 90, 'Teste03.jpg');
INSERT INTO Cadastro_ingresso (nome, descricao, preco, img) VALUES ('Teste04', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 50, 'Teste04.jpg');



