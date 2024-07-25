var express = require("express");   //config padrao para o uso da biblioteca node
var router = express.Router();  //config padrao para o uso da biblioteca node

var geralController = require("../controllers/geralController");  // Importando o Controller 

router.post("/cadastrarGeral", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    geralController.cadastrarGeral(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    geralController.listar(req, res);
});

module.exports = router;    //importar configurações de outros arquivos