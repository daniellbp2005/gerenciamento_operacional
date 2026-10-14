"use client";

import { Modal, Button } from "react-bootstrap";

export default function ModalEvento({ mostrar, fechar, evento }) {
    if (!evento) return null;

    return (
        <Modal show={mostrar} onHide={fechar} centered>
            <Modal.Header closeButton>
                <Modal.Title>{evento.artista}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h3 className="py-2">
                    <strong>Titulo:</strong> {evento.titulo}
                </h3>

                <p>
                    <strong>Categoria:</strong> {evento.categoria}
                </p>

                <div className="py-2">
                    <h5><strong>Descrição:</strong></h5>
                    <span>{evento.descricao}</span>
                </div>

                <p>
                    <strong>Preço:</strong>{" "}
                    {Number(evento.preco).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </p>

                <div className="d-flex flex-column">
                    <p><strong>Hora:</strong> <span>{evento.hora}</span></p>
                    <div className="d-flex gap-2">
                        <p><strong>Cidade:</strong> <span>{evento.cidade}</span></p>
                        <p><strong>Localização:</strong> <span>{evento.localizacao}</span></p>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={fechar}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}