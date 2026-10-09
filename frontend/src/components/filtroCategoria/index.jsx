import { useState } from "react";

export default function FiltroCategoria({ todos, disponivel, rock, sertanejo, mpb, outros }) {
    return (
        <section className="conteiner w-100">
            <div className="conteiner">
                <div className="d-flex flex-column">
                    <h3>Seja bem-vindo !</h3>
                    <h1>Encontre os eventos mais perto de você.</h1>
                </div>
                <div className="d-flex gap-2 flex-wrap">
                    <div className="btn border py-2 rounded border-primary bg-primary text-light"
                        onClick={todos}
                    >Todos</div>
                    <div className="btn border py-2 rounded border-primary bg-primary text-light"
                        onClick={disponivel}
                    > Disponivél</div>
                    <div className="btn border py-2 rounded border-primary bg-primary text-light"
                        onClick={rock}
                    >Rock</div>
                    <div className="btn border py-2 rounded border-primary bg-primary text-light"
                        onClick={sertanejo}
                    >Sertanejo</div>
                    <div className="btn border py-2 rounded border-primary bg-primary text-light"
                        onClick={mpb}
                    >MPB</div>
                    {/* <div className="btn border py-2 rounded border-primary bg-primary text-light"
                        onClick={outros}
                    >Outros</div> */}
                </div>
            </div>
        </section>
    );
}