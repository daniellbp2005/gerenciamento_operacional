"use client";

import { Modal, Button } from "react-bootstrap";

export default function ModalEvento({ mostrar, fechar, evento }) {
    if (!evento) return null;

    return (
        <Modal show={mostrar} onHide={fechar} centered>
            <Modal.Header closeButton>
                <Modal.Title>{evento.nome}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>
                    <strong>Categoria:</strong> {evento.categoria}
                </p>

                <p>
                    <strong>Preço:</strong>{" "}
                    {Number(evento.preco).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={fechar}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}