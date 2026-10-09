const express = require("express");
const db = require("../db/conexao.js")

const router = express.Router();

const {listarEventos, listarEventoEspec, criarEvento, deletarEvento, atualizarEvento} = require("../controllers/eventosRoute.js");

router.get("/",listarEventos);
router.get("/:id",listarEventoEspec);
router.post("/",criarEvento);
router.delete("/:id",deletarEvento);
router.put("/:id",atualizarEvento);

module.exports = router