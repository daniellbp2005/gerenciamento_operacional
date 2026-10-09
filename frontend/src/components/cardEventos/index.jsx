export default function CardEventos({ titulo, artista, categoria, descricao, selecionado }) {
    return (
        <div className="card col-4" style={{ width: "16rem" }}>
            <img src="https://placehold.co/600x400?text=Imagem"
                className="card-img-top" alt="..." />

            {categoria && categoria === ''}
            {categoria && categoria === ''}
            {categoria && categoria === ''}
            {categoria && categoria === ''}
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="semi-bold"> {artista}</p>
                <p className="card-text">
                    {descricao}
                </p>
                <a href="#" className="btn btn-primary" onClick={selecionado}>
                    Go somewhere
                </a>
            </div>
        </div>
    )
}