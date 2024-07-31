-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE sccp;

USE sccp;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE quizsccp (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	acertos int,
	erros int,
	fkUsuarioQuizSccp int,
	FOREIGN KEY (fkUsuarioQuizSccp) REFERENCES usuario(id)
);

CREATE TABLE quizGeral (
	idQuiz INT PRIMARY KEY auto_increment,
	acertos int,
	erros int,
	fkUsuarioQuizGeral int,
	FOREIGN KEY (fkUsuarioQuizGeral) references usuario(id)
);

select * from usuario;

select * from aviso;

select * from quizsccp;

select * from quizgeral;
