import Comentario from "@/components/Comentario";
import FeedCard from "@/components/FeedCard";

const feed = [
    {
        id: 1,
        nome: "One Piece nº 1",
        dono: "Batman Rodrigues",
        img: "https://cf.shopee.com.br/file/ce4ed03217a6920b74b4c5929fc0db07"
    },
    {
        id: 2,
        nome: "Máscara Scorpion MK 11 Edição Colecionador",
        dono: "José Uzumaki",
        img: "https://i.ytimg.com/vi/vZyvdEBuERk/maxresdefault.jpg"
    },
    {
        id: 3,
        nome: "Asa Noturna DC Designer Series",
        dono: "Peter Johnson",
        img: "https://static3.tcdn.com.br/img/img_prod/460977/pre_venda_estatua_asa_noturna_nightwing_13_dc_designer_series_by_jim_lee_dc_collectibles_45168_1_20201211173447.jpg"
    }
]

export default function Page() {
    return (
        <main className="w-full bg-slate-900 min-h-full flex justify-center">
            <section id="feed" className="w-full max-w-2xl bg-gray-700 min-h-screen flex flex-col gap-10 p-11 rounded-lg mb-8">
                <Comentario />
                {
                    feed.map((i) => (
                        <FeedCard
                            key={i.id}
                            dono={i.dono}
                            image={i.img}
                            nome={i.nome}
                        />
                    ))
                }
                <button type="button" className="text-gray-200">Carregar mais</button>
            </section>
        </main>
    )
}