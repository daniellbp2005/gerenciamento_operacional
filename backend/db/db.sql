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

INSERT INTO categoria (categoria) VALUES
('Rock'),
('Sertanejo'),
('Música Eletrônica'),
('MPB'),
('Indisponível');

INSERT INTO eventos (artista, titulo, descricao, imagem, dia, hora, localizacao, cidade, preco, status, categoria_id) VALUES
('Os Paralamas do Sucesso', 'Turnê Clássicos', 'Show com os maiores sucessos da carreira da banda de rock nacional.', 'paralamas.jpg', '2026-05-15', '21:00:00', 'Espaço das Américas', 'São Paulo', 150.00, 'Disponível', 1),
('Iron Maiden', 'Legacy Tour', 'Apresentação histórica de metal com grande estrutura de palco.', 'iron_maiden.jpg', '2026-06-20', '22:00:00', 'Allianz Parque', 'São Paulo', 350.00, 'Disponível', 1),
('Jorge & Mateus', 'Noite Sertaneja', 'Show com os grandes sucessos do sertanejo universitário.', 'jorge_mateus.jpg', '2026-05-22', '22:30:00', 'Villa Country', 'São Paulo', 120.00, 'Disponível', 2),
('Chitãozinho & Xororó', '50 Anos de História', 'Apresentação especial comemorativa dos maiores nomes do sertanejo.', 'chitaozinho.jpg', '2026-07-10', '20:00:00', 'Arena do Grêmio', 'Porto Alegre', 180.00, 'Disponível', 2),
('Alok', 'Electronic Experience', 'Apresentação com show de luzes e grandes sucessos da música eletrônica.', 'alok.jpg', '2026-08-05', '23:00:00', 'Green Valley', 'Camboriú', 200.00, 'Disponível', 3),
('Vintage Culture', 'Night Party', 'Set especial de música eletrônica para agitar a noite inteira.', 'vintage.jpg', '2026-09-12', '23:30:00', 'Laroc Club', 'Valinhos', 160.00, 'Disponível', 3),
('Caetano Veloso', 'Meu Cocô Tour', 'Show intimista com repertório novo e grandes clássicos da MPB.', 'caetano.jpg', '2026-05-30', '20:30:00', 'Circo Voador', 'Rio de Janeiro', 140.00, 'Disponível', 4),
('Djavan', 'Turnê D', 'Apresentação repleta de sucessos e ritmos marcantes da MPB.', 'djavan.jpg', '2026-06-18', '21:00:00', 'KM de Vantagens Hall', 'Rio de Janeiro', 130.00, 'Disponível', 4);

INSERT INTO eventos (artista, titulo, descricao, imagem, dia, hora, localizacao, cidade, preco, status, categoria_id) VALUES
('Ivete Sangalo', 'Arena de Luz', 'Apresentação com repertório de grandes sucessos e muito brilho na produção.', 'ivete.jpg', '2026-11-02', '21:30:00', 'Arena de Eventos', 'Salvador', 290.00, 'Indisponível', 2),
('Luan Santana', 'Turnê do Amor', 'Show emocionante com hits nacionais e repertório especial.', 'luan.jpg', '2026-12-14', '22:30:00', 'Estádio Municipal', 'Belo Horizonte', 180.00, 'Indisponível', 2),
('Beyoncé', 'World Tour', 'Grande espetáculo internacional com produção premium e coreografias marcantes.', 'beyonce.jpg', '2026-09-25', '23:00:00', 'Madison Square', 'São Paulo', 480.00, 'Indisponível', 3),
('Marina Lima', 'MPB em Casa', 'Show intimista com canções clássicas e novas versões de MPB.', 'marina.jpg', '2026-07-30', '19:30:00', 'Teatro Municipal', 'Curitiba', 140.00, 'Indisponível', 4);