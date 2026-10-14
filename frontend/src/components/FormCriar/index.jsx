"use client";
import { useState } from "react";



export default function FormCriar() {

    //criar as variaveis dos campos do formuario usando o useState
    const [artista, setArtista] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [diaEvento, setDiaEvento] = useState("");
    const [horaEvento, setHoraEvento] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [cidade, setCidade] = useState("");
    const [preco, setPreco] = useState("")
    const [status, setStatus] = useState("")
    const [categoria, setCategoria] = useState("");

    async function fetchCriar() {
        fetch("http://localhost:3305/api/eventos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                //adiciona as variaveis aqui
                artista: artista,
                titulo: titulo,
                descricao: descricao,
                dia: diaEvento,
                hora: horaEvento,
                localizacao: localizacao,
                cidade: cidade,
                status: status,
                preco: Number(preco),
                categoria_id: Number(categoria)
            })
        })
        setArtista("");
        setTitulo("");
        setDescricao("");
        setDiaEvento("");
        setHoraEvento("");
        setLocalizacao("");
        setCidade("");
        setPreco("");
        setStatus("");
        setCategoria("");
    }

    function onClickCriar(event) {
        event.preventDefault();
        try {
            fetchCriar();
        } catch (error) {
            alert("Erro ao tentar criar!")
        }
    }

    return (
        <div className="w-100 d-flex justify-content-center align-items">
            <form className="w-50" onSubmit={onClickCriar} >
                <div className="mb-3">
                    <label htmlFor="Artista" className="form-label">
                        Artista
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="Artista"
                        aria-describedby="emailHelp"
                        value={artista}
                        onChange={(e) => setArtista(e.target.value)}
                        required
                    />
                    <div id="emailHelp" className="form-text">
                        Coloque o nome do Artista ou Banda
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="Titulo" className="form-label">
                        Titulo
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="Titulo"
                        aria-describedby="emailHelp"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                    <div id="emailHelp" className="form-text">
                        Digite o nome do show
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center gap-2 mb-3">

                    <div className="d-flex flex-column w-100">
                        <label htmlFor="status" className="form-label">
                            Status
                        </label>
                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="form-select"
                            required>
                            <option value="Disponovél">Disponivel</option>
                            <option value="Indisponivel">Indisponivel</option>
                        </select>
                    </div>

                    <div className="d-flex flex-column w-100">
                        <label htmlFor="categoria" className="form-label">
                            Categoria
                        </label>
                        <select
                            id="categoria"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            className="form-select"
                            required
                        >
                            <option value="">Escolher</option>
                            <option value="53">Gospel</option>
                            <option value="1">Rock</option>
                            <option value="2">Sertanejo</option>
                            <option value="3">Música Eletrônica</option>
                            <option value="4">MPB</option>
                            <option value="54">Workshop</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="Descricao" className="form-label">
                        Descrição
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="Descricao"
                        aria-describedby="emailHelp"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                    <div id="emailHelp" className="form-text">
                        Detalhes do evento
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="d-flex flex-column w-100">
                        <label htmlFor="DiaEvento" className="form-label">
                            Dia do Evento
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="DiaEvento"
                            aria-describedby="emailHelp"
                            value={diaEvento}
                            onChange={(e) => setDiaEvento(e.target.value)}
                            required
                        />
                    </div>

                    <div className="d-flex flex-column w-100">
                        <label htmlFor="HoraEvento" className="form-label">
                            Hora do Evento
                        </label>
                        <input
                            type="time"
                            className="form-control"
                            id="HoraEvento"
                            aria-describedby="emailHelp"
                            value={horaEvento}
                            onChange={(e) => setHoraEvento(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="my-3">
                    <label htmlFor="Localizacao" className="form-label">
                        Localização
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="Localizacao"
                        aria-describedby="emailHelp"
                        value={localizacao}
                        onChange={(e) => setLocalizacao(e.target.value)}
                        required
                    />
                    <div id="emailHelp" className="form-text">
                        Local do evento
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="d-flex flex-column w-100">
                        <label htmlFor="Cidade" className="form-label">
                            Cidade
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="Cidade"
                            aria-describedby="emailHelp"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            required
                        />
                        <div id="emailHelp" className="form-text">
                            Qual a cidade do evento
                        </div>
                    </div>

                    <div className="d-flex flex-column w-100">
                        <label htmlFor="Preco" className="form-label">
                            Preco
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="Preco"
                            aria-describedby="emailHelp"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                            required
                        />
                        <div id="emailHelp" className="form-text">
                            Digite o preço do evento
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>

        </div>
    )
}