var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM quizsccp;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(acertos, erros, idUsuario) {
    var instrucao = `
        INSERT INTO quizsccp (acertos, erros, fkUsuarioQuizSccp) VALUES (${acertos}, ${erros}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQuizSccp() {
    console.log("ACESSEI O SCCP MODEL \n function listarQuizSccp()");
    var instrucaoSql = 
        `SELECT acertos, erros FROM quizsccp ORDER BY idquiz DESC LIMIT 1;`;
    ;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar,
    listarQuizSccp
};
