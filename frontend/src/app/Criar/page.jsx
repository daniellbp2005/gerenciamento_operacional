import FormCriar from "@/components/FormCriar";

export default function Criar() {
    return (
        <main className="bg-light w-100 d-flex flex-column align-items-start gap-2 px-5 py-3 vw-50 flex-grow-1">
            <div className="d-flex flex-column justify-content-start">
                <h3>Seja bem-vindo !</h3>
                <h1>Crie o evento.</h1>
            </div>
            <FormCriar />
        </main>
    )
}