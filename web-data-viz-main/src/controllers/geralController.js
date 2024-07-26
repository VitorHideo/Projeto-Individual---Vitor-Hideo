var geralModel = require("../models/geralModel");     //importando os models onde acontecerá a conexão com o banco de dados

// Função listar que estará nos models, 'select'
function listar(req, res) {
    geralModel.listar().then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });
}


// Função cadastrarGeral o resultado no banco de dados, continua no models
function cadastrarGeral(req, res) {
    var { acertos, erros, fkUsuarioQuizGeral } = req.body; // var das acertos e erros e usuario do quiz

    geralModel.cadastrarGeral(acertos, erros, fkUsuarioQuizGeral).then(function(resposta) {
        res.status(200).send("Resultados do quiz salvos com sucesso");
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

// Função listarQuizGeral para realizar o select apenas do acertos e erros do quiz
function listarQuizGeral(req, res) {
    geralModel.listarQuizGeral()
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

// Exports das funções
module.exports = {
    listar,
    cadastrarGeral,
    listarQuizGeral
};