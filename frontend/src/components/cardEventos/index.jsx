export default function CardEventos({ img, titulo, texto, id }) {
    return (
        <div className="card col-4" style={{ width: "16rem" }}>
            <img src="https://placehold.co/600x400?text=Imagem"
                className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {/* {titulo}  */}
                    </h5>
                <p className="card-text">
                    {/* {texto} */}
                </p>
                <button type="button" className="btn btn-primary" onClick={() => setVerModal(true)}>
                    Ver Detalhes
                </button>
            </div>
        </div>
    )
}