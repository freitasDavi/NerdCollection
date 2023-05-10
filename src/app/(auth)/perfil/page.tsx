"use client";

import { BonecoCard } from "@/components/BonecoCard";
import { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react"

import { productsData } from "@/database/Products"
import { Input } from "@/components/Input";

export default function Perfil() {
    const [bonecos, setBonecos] = useState(productsData);

    return (
        <main className=" bg-gray-900 min-h-screen flex justify-center content-center pt-8">
            <div className="w-3/4">
                <h1 className="text-6xl text-white mb-4 font-dongle">Meu perfil</h1>
                <div className="bg-gray-700 min-h-[400px] rounded-lg p-4">
                    <div id="info" className="w-full min-h-[300px] rounded-lg flex p-4 pt-8">
                        <img
                            className="rounded-full w-40 h-40"
                            src="https://easydrawingguides.com/wp-content/uploads/2017/01/How-to-draw-batmans-face-19.png"
                            alt="profile"
                        />
                        <div>
                            <h2 className="text-5xl text-white mb-0 font-dongle">Oi, eu sou o Batman</h2>
                            <h4 className="font-sans text-gray-300 mb-2">Colecionador ha 5 anos</h4>
                            <p className="text-white font-roboto">
                                Minha grande bio
                                lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, enim. Quod tempore impedit nulla illo vero ut sed. Ipsum minima molestiae eligendi impedit dolor harum quibusdam odio tempora, qui id?
                                lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore sequi, omnis ullam saepe officiis quaerat asperiores recusandae reiciendis velit. Et quo nam sunt laborum error dolores ab porro explicabo repudiandae.
                            </p>
                        </div>
                    </div>
                    <article className="flex flex-col gap-4">
                        <h2 className="text-white font-roboto text-2xl font-medium pl-4">Meus colecionáveis</h2>
                        <div className="sm:w-full md:w-4/6 lg:w-3/6 px-4 flex items-end gap-1">
                            <Input
                                title="Coleção"
                                placeholder="Avengers Assemble"
                            />
                            <button className="text-blue-500 hover:text-blue-200 bg-gray-200 hover:bg-blue-900 transition-all ease-in rounded-lg px-4 py-[0.6rem]">
                                <MagnifyingGlass
                                    height={20}
                                    width={20}
                                />
                            </button>
                        </div>
                        <div id="catalog" className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1">
                            {bonecos.map((boneco) => (
                                <BonecoCard
                                    id={boneco.id}
                                    colecao={boneco.colecao ? boneco.colecao : "Sem coleção"}
                                    nome={boneco.nome}
                                    imageUrl={boneco.imageUrl}
                                />
                            ))}
                        </div>

                        <nav aria-label="Page navigation example" className="w-full flex justify-center py-6">
                            <ul className=" inline-flex -space-x-px">
                                <li>
                                    <a href="#" className="px-3 py-2 ml-0 leading-tight rounded-l-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">Anterior</a>
                                </li>
                                <li>
                                    <a href="#" className="px-3 py-2 leading-tight border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">1</a>
                                </li>
                                <li>
                                    <a href="#" className="px-3 py-2 leading-tight border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" className="px-3 py-2 hover:bg-blue-100 hover:text-blue-700 border-gray-300 bg-gray-700 text-white">3</a>
                                </li>
                                <li>
                                    <a href="#" className="px-3 py-2 leading-tight  border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">4</a>
                                </li>
                                <li>
                                    <a href="#" className="px-3 py-2 leading-tight  border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">5</a>
                                </li>
                                <li>
                                    <a href="#" className="px-3 py-2 leading-tight  border  rounded-r-lg  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">Próxima</a>
                                </li>
                            </ul>
                        </nav>
                    </article>
                </div>
            </div>
        </main>
    )
}