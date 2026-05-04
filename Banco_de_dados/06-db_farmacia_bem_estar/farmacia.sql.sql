CREATE DATABASE db_farmacia_bem_estar;

USE db_farmacia_bem_estar;

-- tabela mae
CREATE TABLE tb_categorias (
id BIGINT AUTO_INCREMENT, 
nome_categoria VARCHAR(50) NOT NULL,
descricao VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

-- tabela filha
CREATE TABLE tb_produtos (
id BIGINT AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
marca VARCHAR(50) NOT NULL,
valor DECIMAL(6,2) NOT NULL,
quantidade_estoque INT NOT NULL,
categoriaid BIGINT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (categoriaid) REFERENCES tb_categorias(id)
);

-- inserção de categorias
INSERT INTO tb_categorias (nome_categoria, descricao)
VALUES
("Medicamentos", "Produtos para tratamento e alívio de sintomas"),
("Cosméticos", "Produtos de beleza e cuidados com a pele"),
("Higiene", "Produtos de higiene pessoal"),
("Suplementos", "Vitaminas e suplementos alimentares"),
("Infantil", "Produtos voltados para bebês e crianças");

-- inserção de produtos
INSERT INTO tb_produtos (nome, marca, valor, quantidade_estoque, categoriaid)
VALUES
("Dipirona", "Medley", 12.50, 100, 1),
("Protetor Solar", "Nivea", 55.90, 40, 2),
("Creme Hidratante", "Monange", 18.99, 60, 2),
("Shampoo Infantil", "Johnson's", 22.00, 35, 5),
("Vitamina C", "Cimed", 49.90, 80, 4),
("Sabonete em Barra", "Dove", 6.50, 120, 3),
("Condicionador", "Pantene", 27.90, 50, 3),
("Colágeno", "Max Titanium", 65.00, 25, 4);

-- verificação da inserção de produtos
SELECT * FROM tb_produtos;

-- produtos com valores maiores do que 50.00
SELECT * FROM tb_produtos WHERE valor > 50.00;

-- produtos com valores entre 5.00 e 60.00
SELECT * FROM tb_produtos WHERE valor BETWEEN 5.00 AND 60.00;

-- produtos que terminam com a letra A 
SELECT * FROM tb_produtos WHERE nome LIKE "%A";

-- inner join entre produtos e categorias
SELECT tb_produtos.nome, tb_produtos.marca, tb_produtos.valor,
tb_produtos.quantidade_estoque, tb_categorias.nome_categoria,
tb_categorias.descricao FROM tb_produtos
INNER JOIN tb_categorias ON tb_produtos.categoriaid = tb_categorias.id;

-- inner join trazendo apenas produtos da categoria Cosméticos
SELECT tb_produtos.nome, tb_produtos.marca, tb_produtos.valor,
tb_produtos.quantidade_estoque, tb_categorias.nome_categoria,
tb_categorias.descricao FROM tb_produtos
INNER JOIN tb_categorias ON tb_produtos.categoriaid = tb_categorias.id
WHERE tb_categorias.nome_categoria = "Cosméticos";

-- consulta extra (busca avançada)
-- produtos com a Letra C no nome e valor abaixo de 30 reais
SELECT nome, marca, valor FROM tb_produtos WHERE nome LIKE
"%C%" AND valor < 30.00;