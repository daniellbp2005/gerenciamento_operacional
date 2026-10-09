export default function FormCriar() {
    return (
        <div className="w-100 d-flex justify-content-center align-items">
            <form className="w-50">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Artista
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                    />
                    <div id="emailHelp" className="form-text">
                        Coloque o nome do Artista ou Banda
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Titulo
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                    />
                    <div id="emailHelp" className="form-text">
                        Digite o nome do show
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Descrição
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                    />
                    <div id="emailHelp" className="form-text">
                        Detalhes do evento
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="d-flex flex-column w-100">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Dia do Evento
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>

                    <div className="d-flex flex-column w-100">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Hora do Evento
                        </label>
                        <input
                            type="time"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>
                </div>

                <div className="my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Localização
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                    />
                    <div id="emailHelp" className="form-text">
                        Local do evento
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="d-flex flex-column w-100">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Cidade
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                        />
                        <div id="emailHelp" className="form-text">
                            Qual a cidade do evento
                        </div>
                    </div>

                    <div className="d-flex flex-column w-100">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Preco
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
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