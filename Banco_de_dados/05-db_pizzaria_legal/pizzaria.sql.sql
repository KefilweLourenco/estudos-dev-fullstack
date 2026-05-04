CREATE DATABASE db_pizzaria_legal;

USE db_pizzaria_legal;

-- tabela mãe
CREATE TABLE tb_categorias (
id BIGINT AUTO_INCREMENT,
tipo VARCHAR(50) NOT NULL,
descricao VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

-- tabela filha
CREATE TABLE tb_pizzas (
id BIGINT AUTO_INCREMENT, 
nome VARCHAR(100) NOT NULL,
tamanho VARCHAR(50) NOT NULL,
borda_recheada VARCHAR(50) NOT NULL,
valor DECIMAL(5,2) NOT NULL,
categoriaid BIGINT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (categoriaid) REFERENCES tb_categorias(id)
);

-- inserção de categorias 
INSERT INTO tb_categorias (tipo, descricao)
VALUES
("Salgada", "Pizzas tradicionais salgadas"),
("Doce", "Pizzas com recheios doces"),
("Vegetariana", "Pizza sem carne"),
("Especial", "Pizza com ingredientes premium"),
("Vegana", "Pizzas sem ingredientes de origem animal");

-- inserção de pizzas
INSERT INTO tb_pizzas (nome, tamanho, borda_recheada, valor, categoriaid)
VALUES
("Mussarela", "Grande", "Sim", 42.00, 1),
("Calabresa", "Grande", "Não", 48.00, 1),
("Marguerita", "Média", "Sim", 55.00, 3),
("Frango com Catupiry", "Grande", "Sim", 62.00, 4),
("Chocolate", "Média", "Não", 52.00, 2),
("Morango com Nutella", "Grande", "Sim", 78.00, 2),
("Milho Verde", "Média", "Não", 50.00, 3),
("Brócolis com Palmito", "Grande", "Sim", 65.00, 5);

-- verificação da inserção de pizzas
SELECT * FROM tb_pizzas;

-- pizzas com valores maiores que 45.00
SELECT * FROM tb_pizzas WHERE valor > 45.00;

-- pizzas com valor entre 50.00 e 100.00
SELECT * FROM tb_pizzas WHERE valor BETWEEN 50.00 AND 100.00;

-- pizzas que possuem letra M no inicio 
SELECT * FROM tb_pizzas WHERE nome LIKE "m%";

-- inner join entre pizzas e categorias
SELECT tb_pizzas.nome, tb_pizzas.tamanho, tb_pizzas.borda_recheada,
tb_pizzas.valor, tb_categorias.tipo, tb_categorias.descricao
FROM tb_pizzas INNER JOIN tb_categorias
ON tb_pizzas.categoriaid = tb_categorias.id;

-- inner join trazendo apenas pizzas de categoria doce
SELECT tb_pizzas.nome, tb_pizzas.tamanho, tb_pizzas.borda_recheada,
tb_pizzas.valor, tb_categorias.tipo, tb_categorias.descricao
FROM tb_pizzas INNER JOIN tb_categorias
ON tb_pizzas.categoriaid = tb_categorias.id
WHERE tb_categorias.tipo = "Doce";

-- consulta extra (promoção)
-- pizzas doces com 20% de desconto
SELECT p.nome, p.valor, (p.valor * 0.8) AS valor_promocional,
c.tipo FROM tb_pizzas p INNER JOIN tb_categorias c 
ON p.categoriaid = c.id WHERE c.tipo = "Doce";