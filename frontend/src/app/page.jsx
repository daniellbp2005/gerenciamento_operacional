'use client'
import FiltroCategoria from "@/components/filtroCategoria";
import CardEventos from "@/components/cardEventos";
import { useState, useEffect } from "react";
import ModalEvento from "@/components/ModalEvento";

export default function Home() {
  const [evento, setEvento] = useState([]);
  const [filtro, setFiltro] = useState('todos');
  const [selecionado, setSelecionado] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function listar() {
      try {
        const linkApi = await fetch('http://localhost:3305/api/eventos')
        const data = await linkApi.json()

        if (filtro === 'todos') {
          setEvento(data.produtos);
        }
        if (filtro === 'Disponível') {
          setEvento(data.produtos.filter((a) => a.status === 'Disponível'))
        }
        if (filtro === 'Rock') {
          setEvento(data.produtos.filter((a) => a.categoria === 'Rock'))
        }
        if (filtro === 'Sertanejo') {
          setEvento(data.produtos.filter((a) => a.categoria === 'Sertanejo'))
        }
        if (filtro === 'MPB') {
          setEvento(data.produtos.filter((a) => a.categoria === 'MPB'))
        }

      } catch {
        console.error("Erro ao consultar o backend");
      }
    }
    listar()
  }, [filtro]);

  return (
    <main className="bg-light bg-light d-flex flex-column align-items-start gap-2 px-5 py-3 vw-50 flex-grow-1">
      <FiltroCategoria
        todos={() => setFiltro('todos')}
        disponivel={() => setFiltro('Disponível')}
        rock={() => setFiltro('Rock')}
        sertanejo={() => setFiltro('Sertanejo')}
        mpb={() => setFiltro('MPB')}
      // outros={() => setFiltro('outros')}
      />
      <section className="conteiner w-100">
        <div className="row gap-3">
          {evento && evento.map((a) => (
            <CardEventos titulo={a.titulo} artista={a.artista} descricao={a.descricao} selecionado={() => {
              setSelecionado(a); setModal(true)
            }} key={a.id} />
          ))}
        </div>
      </section>
      <ModalEvento
        mostrar={modal}
        fechar={() => setSelecionado(null)}
        evento={selecionado}
      />
    </main>
  );
}
