var sccpModel = require("../models/sccpModel");     //importando os models onde acontecerá a conexão com o banco de dados

function listar(req, res) {
    sccpModel.listar().then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    var { acertos, erros, fkUsuarioQuizSccp } = req.body;

    sccpModel.cadastrar(acertos, erros, fkUsuarioQuizSccp).then(function(resposta) {
        res.status(200).send("Resultados do quiz salvos com sucesso");
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    cadastrar
};