var geralModel = require("../models/geralModel");     //importando os models onde acontecerá a conexão com o banco de dados

function listar(req, res) {
    geralModel.listar().then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrarGeral(req, res) {
    var { acertos, erros, fkUsuarioQuizGeral } = req.body;

    geralModel.cadastrarGeral(acertos, erros, fkUsuarioQuizGeral).then(function(resposta) {
        res.status(200).send("Resultados do quiz salvos com sucesso");
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    cadastrarGeral
};