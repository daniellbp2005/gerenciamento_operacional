import FiltroCategoria from "@/components/filtroCategoria";
import CardEventos from "@/components/cardEventos";

export default function Home() {
  return (
    <main>
      <FiltroCategoria />
      <section className="conteiner">
        <CardEventos />
        <CardEventos />
        <CardEventos />
        <CardEventos />
        <CardEventos />
        <CardEventos />
        <CardEventos />
        <CardEventos />
        <CardEventos />
        <CardEventos />

      </section>
    </main>
  );
}
