CREATE DATABASE db_rh;

USE db_rh;

CREATE TABLE tb_colaboradores(
id BIGINT AUTO_INCREMENT,
nome VARCHAR (100) NOT NULL,
cargo VARCHAR (100) NOT NULL,
setor VARCHAR (100) NOT NULL,
salario DECIMAL (10,2) NOT NULL,
data_admissao DATE NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO tb_colaboradores(nome, cargo, setor, salario, data_admissao)
VALUES
("Michelle Luciano", "Analista de RH", "Recursos Humanos", 2500.00, "2023-05-10"),
("Lucas Marcelo", "Auxiliar Administrativo", "Administrativo", 1800.00, "2024-01-15"),
("Kefilwe Lourenco", "Desenvolvedor JR", "Tecnologia", 3900.00, "2022-08-20"),
("Amanda Pereira", "Estagiaria", "Financeiro", 1500.00, "2025-02-01"),
("Fernanda Passos", "Coordenadora", "Marketing", 5000.00, "2021-11-03");

SELECT * FROM tb_colaboradores;
SELECT * FROM tb_colaboradores WHERE salario > 2000.00;
SELECT * FROM tb_colaboradores WHERE salario < 2000.00;

-- Lucas Marcelo receberá um aumento de 200.00 pelo bom desempenho
UPDATE tb_colaboradores SET salario = salario + 200.00 WHERE id = 2;

-- Inicialmente eu havia definido o salário diretamente como 2000.00.
-- Depois optei por utilizar uma lógica mais dinâmica (salario + 200),
-- porém executei o comando mais de uma vez, o que elevou o salário além do esperado.
-- Como o banco de dados não possui CTRL + Z, corrigi manualmente o valor
-- revertendo o aumento com a subtração de 200.
 
UPDATE tb_colaboradores SET salario = salario - 200.00 WHERE id = 2;

SELECT * FROM tb_colaboradores WHERE id = 2;





