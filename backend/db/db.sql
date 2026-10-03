CREATE DATABASE eventoMusical;

USE eventoMusical;

CREATE TABLE IF NOT EXISTS categoria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    categoria VARCHAR(33) NOT NULL
);

CREATE TABLE IF NOT EXISTS eventos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    artista VARCHAR(255) NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    imagem VARCHAR(255) NULL,
    dia DATE NOT NULL,
    hora TIME NOT NULL,
    localizacao VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT "Disponovél",
    categoria_id INT NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES categoria(id)
);