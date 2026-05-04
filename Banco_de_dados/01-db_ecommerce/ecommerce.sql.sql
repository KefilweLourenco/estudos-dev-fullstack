CREATE DATABASE db_ecommerce;

USE db_ecommerce;

CREATE TABLE tb_produtos(
id BIGINT AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
categoria VARCHAR(100) NOT NULL,
marca VARCHAR(100) NOT NULL,
preco DECIMAL(10,2) NOT NULL,
estoque INT NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO tb_produtos (nome, categoria, marca, preco, estoque)
VALUES
("Notebook Lenovo IdeaPad", "Informática", "Lenovo", 3500.00, 10),
("Mouse Gamer G203", "Periféricos", "Logitech", 180.00, 25),
("Teclado Mecânico Kumara", "Periféricos", "Redragon", 250.00, 15),
("Smartphone Galaxy A35", "Celulares", "Samsung", 1600.00, 8),
("Fone Bluetooth Tune 520BT", "Áudio", "JBL", 280.00, 20),
("Monitor LG 24 polegadas", "Monitores", "LG", 899.00, 12),
("Cadeira Gamer", "Móveis", "ThunderX3", 750.00, 5),
("Webcam Full HD", "Acessórios", "Logitech", 320.00, 18);

SELECT * FROM tb_produtos;
SELECT * FROM tb_produtos WHERE preco > 500.00;
SELECT * FROM tb_produtos WHERE preco < 500.00;

-- Atualização de preço da webcam após alteração no valor de venda
-- Estava em promoção mas saiu da promoção por conta dos conflitos mundiais 
UPDATE tb_produtos SET preco = 349.90 WHERE id = 8;

SELECT * FROM tb_produtos WHERE id = 8;