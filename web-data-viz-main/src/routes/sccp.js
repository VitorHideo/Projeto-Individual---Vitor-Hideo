var express = require("express");   //config padrao para o uso da biblioteca node
var router = express.Router();  //config padrao para o uso da biblioteca node

var sccpController = require("../controllers/sccpController");  // Importando o Controller 

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    sccpController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    sccpController.listar(req, res);
});

module.exports = router;    //importar configurações de outros arquivos