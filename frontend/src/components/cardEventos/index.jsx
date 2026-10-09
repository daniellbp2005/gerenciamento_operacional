export default function CardEventos({ titulo, artista, categoria, descricao, selecionado }) {
    return (
        <div className="card col-4" style={{ width: "16rem" }}>

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