/* eslint-disable @next/next/no-img-element */
"use client"

import { productsData } from "@/database/Products";
import { useState } from "react";
import styles from "./styles.module.css";
import { Rating } from "@/components/Rating";
import Comentario from "@/components/Comentario";
import { CommentCard } from "@/components/CommentCard/Index";

const comentarios = [
    {
        id: 1,
        nome: "João Pedro",
        profilePic: "https://i0.wp.com/1.bp.blogspot.com/-zdXH6oG0LCo/WdP2e0EBzsI/AAAAAAAAMis/gLW04W0p0SMp5LCIjTawIe44Zri8l-ffgCEwYBhgL/s1600/JSTLG%2B-%2BProfile_Batman_2765x4096.jpg?ssl=1",
        comentario: "Esse personagem é incrível 🔥🔥"
    },
    {
        id: 2,
        nome: "Maria Joaquina",
        profilePic: "https://pbs.twimg.com/profile_images/2214892940/Maria-Joaquina_400x400.jpg",
        comentario: "Tentei comprar ele e não consegui 😢😢"
    },
    {
        id: 3,
        nome: "Carlos Trikas",
        profilePic: "https://www.lance.com.br/melhorpreco/wp-content/uploads/2022/10/loja-do-sao-paulo.png",
        comentario: "Meu sonho de infância ☁"
    }
]

export default function Produto({ params }: { params: { id: number } }) {
    const [produto, setProduto] = useState(
        productsData.find((prod) => prod.id == params.id)
    );


    return (
        <main className=" bg-gray-900 min-h-screen flex justify-center content-center pt-8 font-roboto">
            <div className='w-full max-w-5xl bg-gray-700 min-h-screen sm:flex-col md:flex-row flex  gap-4 sm:px-5 md:p-11 rounded-lg mb-8'>
                <div className="flex flex-col gap-2 w-full border-r-[1px] border-gray-600 px-4">
                    <div className="w-full">
                        <img
                            src={produto!.imageUrl}
                            alt={produto?.nome}
                            className="rounded-lg w-full min-h-[500px] max-h-[500px] object-contain"
                        />
                    </div>
                    <span className="text-center">
                        <h2 className="font-roboto font-bold text-gray-900 text-2xl">{produto?.nome}</h2>
                    </span>
                    <div className="flex justify-between px-4 text-gray-300">
                        <span>Marca: <b>{produto?.marca}</b></span>
                        <span>Coleção: <b>{produto?.colecao}</b></span>
                    </div>
                    <div className="flex justify-between px-4 text-gray-300">
                        <span>Categoria: <b>{produto?.categoria}</b></span>
                        <span className="bg-orange-100 border-[1px] border-orange-500 rounded-lg text-sm py-1 px-2 text-black">A venda</span>
                    </div>
                    <div className="p-4 text-justify text-gray-300">
                        <h4 className="font-bold text-gray-400">Descrição:</h4>
                        <p>{produto?.descricao}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between h-full min-w-[350px]">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col w-full items-center pb-4 mb-2 border-b-[1px] border-gray-600">
                            <span className="uppercase font-bold leading-tight text-white">
                                Nota
                            </span>
                            <Rating />
                        </div>
                        {comentarios.map((comment) => (
                            <CommentCard
                                key={comment.id}
                                comentario={comment.comentario}
                                nome={comment.nome}
                                pic={comment.profilePic}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        <Comentario
                            placeholder="O que achou desse colecionável?"
                        />
                        <button className="bg-white p-2 rounded-lg lowercase font-medium tracking-tight text-gray-800">Enviar</button>
                    </div>
                </div>
            </div>
        </main>
    );
}