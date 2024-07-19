var express = require("express");   //config padrao para o uso da biblioteca node
var router = express.Router();  //config padrao para o uso da biblioteca node

var sccpController = require("../controllers/sccpController");  // Importando o Controller 

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /sccp/cadastrar
    sccpController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    sccpController.listar(req, res);
});

// Criando a rota para o select de acertos e erros do quiz
router.get("/listarQuiz", function (req, res) {
    sccpController.listarQuizSccp(req, res);
});

module.exports = router;    //importar configurações de outros arquivos
