var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM quizsccp;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(acertos, erros, fkUsuarioQuizSccp) {
    var instrucao = `
        INSERT INTO quizsccp (acertos, erros, fkUsuarioQuizSccp) VALUES (${acertos}, ${erros}, ${fkUsuarioQuizSccp});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQuizSccp() {
    console.log("ACESSEI O SCCP MODEL \n function listarQuizSccp()");
    var instrucaoSql = `
        SELECT acertos, erros FROM quizsccp;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar,
    listarQuizSccp
};
