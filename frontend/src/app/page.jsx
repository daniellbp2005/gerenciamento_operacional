'use client'
import FiltroCategoria from "@/components/filtroCategoria";
import CardEventos from "@/components/cardEventos";
import { Globe } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-light">
      <FiltroCategoria />
      <section className="conteiner px-5 w-100">
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
    </main>
  );
}
