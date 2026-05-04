CREATE DATABASE db_escola;

USE db_escola;

CREATE TABLE tb_estudantes (
id BIGINT AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
turma VARCHAR(50) NOT NULL,
idade INT NOT NULL,
responsavel VARCHAR(100) NOT NULL,
nota DECIMAL(3,1) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO tb_estudantes (nome, turma, idade, responsavel, nota)
VALUES
("Agatha Clara", "1A", 15, "Marcia Clara", 8.5),
("Breno Silva", "2B", 16, "Carlos Silva", 6.8),
("Camila Pitanga", "3A", 17, "Patricia Pitanga", 9.0),
("Derick Santos", "1C", 15, "Djalma Santos", 5.9),
("Edila Lima", "2A", 16, " Jocelia Lima", 7.5),
("Fernando Costa", "3B", 17, "Ronaldo Costa", 6.5),
("Giovanna Rocha", "1B", 15, "Gerluce Rocha", 8.0),
("Hugo Souza", "2C", 16, "Dida Souza", 4.7);

SELECT * FROM tb_estudantes;
SELECT * FROM tb_estudantes WHERE nota > 7.0;
SELECT * FROM tb_estudantes WHERE nota < 7.0;

-- Após a atividade de recuperação, Hugo Souza obteve aumento na nota
UPDATE tb_estudantes SET nota = 7.8 WHERE id = 8;
SELECT * FROM tb_estudantes WHERE id = 8;
