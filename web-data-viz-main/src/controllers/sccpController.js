var sccpModel = require("../models/sccpModel");     //importando os models onde acontecerá a conexão com o banco de dados

function listar(req, res) {
    sccpModel.listar().then(function(resultado) {   // Função listar que estará nos models
        res.status(200).json(resultado);
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    var { acertos, erros, fkUsuarioQuizSccp } = req.body;   // var das acertos e erros e usuario do quiz

    sccpModel.cadastrar(acertos, erros, fkUsuarioQuizSccp).then(function(resposta) {    // Função cadastrar que estará nos models
        res.status(200).send("Resultados do quiz salvos com sucesso");
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function listarQuizSccp(req, res) {
    sccpModel.listarQuizSccp()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os dados do quiz: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {      //importar outras funções
    listar,
    cadastrar,
    listarQuizSccp
};