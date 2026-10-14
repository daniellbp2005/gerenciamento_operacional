'use client'
import { useState, useEffect } from 'react';
import { Plus, Pen, Minus } from 'lucide-react';
export default function Editar() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function listar() {
            try {
                const linkApi = await fetch("http://localhost:3305/api/eventos");
                const data = await linkApi.json()
                setData(data)
            } catch (error) {
                console.error(error);
            }
        }
        listar()
    }, []);

    return (
        <main className="bg-light d-flex flex-column align-items-start gap-2 px-5 py-3 vw-50 flex-grow-1">
            <div className="d-flex flex-column">
                <h3>Seja bem-vindo !</h3>
                <h1>Edite os eventos.</h1>
            </div>
            <table className="table table-striped table-hover">
                <thead >
                    <tr>
                        <th className="bg-dark text-light" scope="col">id</th>
                        <th className="bg-dark text-light" scope="col">Nome</th>
                        <th className="bg-dark text-light" scope="col">Artista</th>
                        <th className="bg-dark text-light" scope="col">Local</th>
                        <th className="bg-dark text-light" scope="col">Status</th>
                        <th className="bg-dark text-light" scope="col">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mauro</td>
                        <td>Rodolfo</td>
                        <td>São Paulo</td>
                        <td>Disponivéll</td>
                        <td ><button className='btn border bg-info text-light' type="button"> <Pen size={18} /></button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>São Paulo</td>
                        <td>Disponivéll</td>
                        <td ><button className='btn border bg-info text-light' type="button"> <Pen size={18} /></button></td>

                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td>São Paulo</td>
                        <td>Disponivéll</td>
                        <td><button className='btn border bg-info text-light' type="button"> <Pen size={18} /></button></td>
                    </tr>
                </tbody>
            </table>

        </main>
    )
}