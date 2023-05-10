"use client";

import Comentario from "@/components/Comentario";
import FeedCard from "@/components/FeedCard";
import { productsData } from "@/database/Products";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
    const [bonecos, setBonecos] = useState(productsData);

    return (
        <main className="w-full bg-slate-900 min-h-full flex justify-center">
            <section id="feed" className="w-full max-w-2xl bg-gray-700 min-h-screen flex flex-col gap-10 p-11 rounded-lg mb-8">
                <div className="flex flex-col items-end gap-2">
                    <Comentario />
                    <Link href="/novo">
                        <button className="bg-blue-300 rounded-lg px-4 py-1 font-roboto font-medium text-gray-600 
                        hover:bg-blue-700 hover:text-gray-200 transition-colors ease-in-out">
                            Enviar
                        </button>
                    </Link>
                </div>
                {
                    bonecos.filter((boneco) => boneco.dono !== "Batman Soares")
                        .map((i) => (
                            <Link href={`/produto/${i.id}`} key={i.id}>
                                <FeedCard
                                    dono={i.dono}
                                    image={i.imageUrl}
                                    nome={i.nome}
                                />
                            </Link>
                        ))
                }
                <button type="button" className="text-gray-200">Carregar mais</button>
            </section>
        </main>
    )
}