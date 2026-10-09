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
'use client'
import { useState } from "react";

export default function ModalEvento({ evento, onClose }) {
    return (
        <div
            className="modal d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            aria-modal="true"
            role="dialog"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">titulo</h5>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Fechar"
                            onClick={onClose}
                        ></button>
                    </div>

                    <div className="modal-body">

                        <div className="mb-3">
                            <label className="form-label">Artista</label>
                            <input type="text" className="form-control" placeholder="Nome do artista" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Título</label>
                            <input type="text" className="form-control" placeholder="Nome do evento" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Descrição</label>
                            <textarea className="form-control" rows="3" placeholder="Detalhes do evento"></textarea>
                        </div>

                        <div className="d-flex gap-2">
                            <div className="w-100">
                                <label className="form-label">Data</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="w-100">
                                <label className="form-label">Hora</label>
                                <input type="time" className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Fechar
                        </button>
                        <button type="button" className="btn btn-primary">
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}