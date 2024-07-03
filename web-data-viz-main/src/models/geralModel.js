var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM quizGeral;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(acertos, erros, fkUsuarioQuizGeral) {
    var instrucao = `
        INSERT INTO quizGeral (acertos, erros, fkUsuarioQuizGeral) VALUES (${acertos}, ${erros}, ${fkUsuarioQuizGeral});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};