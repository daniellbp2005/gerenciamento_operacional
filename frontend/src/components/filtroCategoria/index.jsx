export default function FiltroCategoria() {
    return (
        <section className="conteiner w-100">
            <div className="conteiner">
                <div className="d-flex flex-column">
                    <h3>Seja bem-vindo !</h3>
                    <h1>Encontre os eventos mais perto de você.</h1>
                </div>
                <div className="d-flex gap-2 flex-wrap">
                    <div className="btn border py-2 rounded border-primary bg-primary text-light">Todos</div>
                    <div className="btn border py-2 rounded border-primary bg-primary text-light"> Disponivél</div>
                    <div className="btn border py-2 rounded border-primary bg-primary text-light">Esgotado</div>
                    <div className="btn border py-2 rounded border-primary bg-primary text-light">Recentes</div>
                </div>
            </div>
        </section>
    );
}