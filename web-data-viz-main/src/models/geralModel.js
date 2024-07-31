// Config do Banco de dados
var database = require("../database/config");


// Função listar, com o var instrução para realizar o select da tabela QuizGeral
function listar() {
    var instrucao = `
        SELECT * FROM quizGeral;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


// Função CadastrarGeral, com o var instrução para dar um insert na tabela QuizGeral dos acertos e erros e fkUsu
function cadastrarGeral(acertos, erros, fkUsuarioQuizGeral) {
    var instrucao = `
        INSERT INTO quizGeral (acertos, erros, fkUsuarioQuizGeral) VALUES (${acertos}, ${erros}, ${fkUsuarioQuizGeral});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


// Função listarQuizGeral, com a instrução SQL para listar apenas os acertos e erros do último quiz
function listarQuizGeral() {
    console.log("ACESSEI O GERAL MODEL \n function listarQuizGeral()");
    var instrucaoSql = `
        SELECT acertos, erros FROM quizGeral ORDER BY idquiz DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Export das funções
module.exports = {
    cadastrarGeral,
    listar,
    listarQuizGeral
};