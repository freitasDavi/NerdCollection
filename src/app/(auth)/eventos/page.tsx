// "use client"

const proximosEventos: EventCardProps[] = [
    {
        id: 1,
        date: '11 Setembro 2022',
        img: "https://images.sympla.com.br/62c36c98bff90-xs.jpg",
        resumo: "TANUKI WORLD FEST - O maior evento Multicultural de Criciúma e Região! Reune a cada edição mais de 5000 mil pessoas e disponibiliza mais de 200 atrações e atividades (dentro de 1 único dia de evento). Em 2022 faremos a maior e melhor edição já produzida por nossa equipe (Z Edition) - IMPERDÍVEL! EVENTO FEITO COM CARINHO PARA PROMOVER A FELICIDADE!!!",
        title: "Tanuki World Fest Z"
    },
    {
        id: 2,
        date: '19 Julho 2023',
        img: "https://images.thedirect.com/media/article_full/marvel-dc-comic-con-time_gQmrzVJ.jpg",
        resumo: "San Diego Comic-Con International is a comic book convention and nonprofit multi-genre entertainment event held annually in San Diego, California, since 1970. The name, as given on its website, is Comic-Con International: San Diego; but it is commonly known simply as Comic-Con or the San Diego Comic-Con or SDCC",
        title: "San Diego Comic-Con International"
    }
]

import { EventCard, EventCardProps } from "@/components/EventCard";

export default function Eventos() {
    return (
        <main className="w-full bg-slate-900 min-h-full flex justify-center">
            <section id="feed" className="w-full max-w-2xl bg-gray-700 min-h-screen flex flex-col gap-10 p-11 rounded-lg mb-8">
                <h1 className="text-6xl text-white font-dongle">Próximos eventos</h1>

                {proximosEventos.map((evento) => (
                    <EventCard
                        id={evento.id}
                        key={evento.id}
                        img={evento.img}
                        date={evento.date}
                        title={evento.title}
                        resumo={evento.resumo}
                    />
                ))}
            </section>
        </main>
    )
}