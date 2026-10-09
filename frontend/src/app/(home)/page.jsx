'use client'
import { useState, useEffect } from "react";
import FiltroCategoria from "@/components/filtroCategoria";
import CardEventos from "@/components/cardEventos";
import ModalEvento from "@/components/ModalEvento";
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  const [evento, setEvento] = useState([]);

  useEffect(() => {
    async function carregarEventos() {
      try {
          const linkApi = await fetch("http://localhost:3305/api/eventos")
          const data = await linkApi.json();
          setEvento(data ?? [])
      } catch {
        console.error("Deu ruim");
      }
    }
    // carregarEventos()
  })


  return (
    <main className="bg-light bg-light d-flex flex-column align-items-start gap-2 px-5 py-3 vw-50 flex-grow-1">
      <FiltroCategoria />

      {/* <button className="btn btn-primary" onClick={() => setVerModal(true)}>
        Abrir modal
      </button> */}

      <section className="conteiner w-100">
        <div className="row gap-3">
          <CardEventos
            titulo={"Exemple title"}
            texto={"Lorem ipsum, dolor sit amet consectetur fugiat. Repudiandae commodi dolorum quae vitae mollitia fugit fuga."}
          />
          <CardEventos
            titulo={"Exemple title"}
            texto={"Lorem ipsum, dolor sit amet consectetur fugiat. Repudiandae commodi dolorum quae vitae mollitia fugit fuga."}
          />
          <CardEventos
            titulo={"Exemple title"}
            texto={"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Repudiandae commodi dolorum quae vitae mollitia fugit fuga."}
          />
          <CardEventos
            titulo={"Exemple title"}
            texto={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam debitis neque, iste fugit cum, ."}
          />
          <CardEventos
            titulo={"Exemple title"}
            texto={"Lorem ipsum, dolor sit amet consectetur tias quibusdam error fugiat. Repudiandae commodi dolorum quae vitae mollitia fugit fuga."}
          />
        </div>
      </section>

      {/* <ModalEvento
        onClose={() => setVerModal(false)}
      /> */}
    </main>
  );
}
