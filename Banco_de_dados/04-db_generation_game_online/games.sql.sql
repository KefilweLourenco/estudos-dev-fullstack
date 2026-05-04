CREATE DATABASE db_generation_game_online;

USE db_generation_game_online;

-- tabela mãe
CREATE TABLE tb_classes (
id BIGINT AUTO_INCREMENT,
nome_classe VARCHAR(50) NOT NULL,
especialidade VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

-- tabela filha
CREATE TABLE tb_personagens (
id BIGINT AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
nivel INT NOT NULL, 
poder_ataque INT NOT NULL,
poder_defesa INT NOT NULL, 
classeid BIGINT,
PRIMARY KEY (id),
FOREIGN KEY (classeid) REFERENCES tb_classes(id)
);

INSERT INTO tb_classes (nome_classe, especialidade)
VALUES
("Guerreiro", "Combate corpo a corpo"),
("Arqueiro", "Ataques à distância"),
("Mago", "Magias ofensivas"),
("Assassino", "Ataques rápidos e furtivos"),
("Curandeiro", "Suporte e recuperação");

INSERT INTO tb_personagens (nome, nivel, poder_ataque, poder_defesa, classeid)
VALUES
("Cael", 15, 2500, 1800, 1),
("Luna", 12, 1900, 1500,2),
("Cedric", 20, 3000, 1200, 3),
("Bianca", 18, 2200, 2100, 1),
("Ciro", 10, 1700, 1300, 4),
("Ayla", 14, 2100, 1900, 2),
("Nina", 16, 1600, 1100, 5),
("Cassandra", 22, 2800, 2000, 3);

-- verificação de inserção de personagens
SELECT * FROM tb_personagens;

-- personagens com poder de ataque maior do que 2000
SELECT * FROM tb_personagens WHERE poder_ataque > 2000;

-- personagens com poder de defesa entre 1000 e 2000
SELECT * FROM tb_personagens WHERE poder_defesa BETWEEN 1000 AND 2000;

-- personagens que possuem a letra C no nome
SELECT * FROM tb_personagens WHERE nome LIKE "%C%";

-- selecionando inner join entre personagens e classes
SELECT tb_personagens.nome, tb_personagens.nivel,
tb_personagens.poder_ataque, tb_personagens.poder_defesa,
tb_classes.nome_classe, tb_classes.especialidade
FROM tb_personagens INNER JOIN tb_classes 
ON tb_personagens.classeid = tb_classes.id;

-- inner join trazendo apenas personagens da classe "Arqueiro"
SELECT tb_personagens.nome, tb_personagens.nivel,
tb_personagens.poder_ataque, tb_personagens.poder_defesa,
tb_classes.nome_classe, tb_classes.especialidade
FROM tb_personagens INNER JOIN tb_classes
ON tb_personagens.classeid = tb_classes.id
WHERE tb_classes.nome_classe = "Arqueiro";

-- consulta extra 
-- ranking de personagens por poder total (ataque + defesa)
SELECT nome, (poder_ataque + poder_defesa) AS poder_total
FROM tb_personagens ORDER BY poder_total DESC;

-- personagens fortes (ataque e defesa alto)
SELECT nome, poder_ataque, poder_defesa
FROM tb_personagens WHERE poder_ataque > 2000 
AND poder_defesa > 1500;


