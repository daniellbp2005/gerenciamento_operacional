const { json } = require("express");
const db = require("../db/conexao.js");

async function listarEventos(req, res, next) {
    try {
        const sql = `SELECT
            eventos.id,
            eventos.artista,
            eventos.titulo,
            eventos.descricao,
            eventos.imagem,
            eventos.dia,
            eventos.hora,
            eventos.localizacao,
            eventos.cidade,
            eventos.preco,
            eventos.status,
            categoria.categoria
            FROM eventos
            INNER JOIN categoria
            ON eventos.categoria_id = categoria.id
            `
        const [resultados] = await db.query(sql);
        res.status(200).json({ status: true, produtos: resultados })
    } catch (e) {
        next(e);
    }
}

async function listarEventoEspec(req,res,next) {
    try {
        const id = Number(req.params.id);
        const sql = 
        `SELECT * FROM eventos WHERE id = ?`;

        const [resultado] = await db.query(sql,[id]);

        res.status(200).json({mensagem:true,produto: resultado});
        
    } catch (e) {
        next(e);
    }
}

async function criarEvento(req,res,next) {
    try {
        const {artista,titulo,descricao,imagem,dia,hora,localizacao,cidade,preco,status,categoria_id }= req.body;

        const sql = 
        `INSERT INTO eventos 
        (artista,titulo,descricao,imagem,dia,hora,localizacao,cidade,preco,status,categoria_id)
         values ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const valores = [artista,titulo,descricao,imagem,dia,hora,localizacao,cidade,preco,status,categoria_id];

        const [resultado] = await db.query(sql,valores);

        res.status(201).json({mensagem:true,id: resultado.insertId});

    } catch (e) {
        next(e);
    }
}

async function atualizarEvento(req,res,next) {
    try{
        const {artista,titulo,descricao,imagem,dia,hora,localizacao,cidade,preco,status }= req.body;
        const id = Number(req.params.id)

        const sql = `
        UPDATE eventos 
        SET artista = ?,
        titulo = ?,
        descricao = ?,
        imagem = ?,
        dia = ?,
        hora = ?,
        localizacao = ?,
        cidade = ?,
        preco = ?,
        status = ?
        WHERE id = ?
        `;

        const valores = [artista,titulo,descricao,imagem,dia,hora,localizacao,cidade,preco,status,id];
        const [resultado] = await db.query(sql,valores);
        res.status(200).json({mensagem:true,produto:resultado})
    } catch(e){
        next(e);
    }
}

async function deletarEvento(req,res,next) {
    try{
        const id = Number(req.params.id);
        const sql = `DELETE FROM eventos WHERE id = ?`;
        
        const [resultado] = await db.query(sql,[id]);
        res.status(200).json({mesagem:true})
    } catch(e) {
        next(e);
    }
}

module.exports = {
    listarEventos,
    listarEventoEspec,
    criarEvento,
    atualizarEvento,
    deletarEvento
}
