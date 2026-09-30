create database eventoMusical 

use eventoMusical

create table if not exists musicos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome varchar(255) NOT NULL INT,
    artista VARCHAR(255) NOT NULL INT,
    disponivel BOOLEAN,
    descricao varchar(255) not null int,
    situacao VARCHAR(255) NOT NULL INT,
    horario DATE NOT NULL DEFAULT indefinido,
    localizacao varchar(255) not null int ,
    preco numeric(10,3) null,
    contraint fk_musiCat foreign key(categoria) references musicos(id),
    foto 
)

create table if not exists catageria(
    id int AUTO_INCREMENT primary key,
    categoria not null int varchar(55)
)