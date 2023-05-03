"use client"

import { productsData } from "@/database/Products";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Produto({ params }) {
    const [produto, setProduto] = useState(
        productsData.find((prod) => prod.id == params.id)
    );

    return (
        <main className=" bg-gray-900 min-h-screen flex justify-center content-center pt-8">
            <div className={styles.container}>
                <div>
                    <div className={styles.imagem}><img src={produto!.imageUrl} /></div>
                    <h1 className={styles.nome}>{produto?.nome}</h1>
                    <hr />
                    <div></div>
                    <div className={styles.colecao}>
                        <span>Marca:</span>
                        <h3>{produto?.marca}</h3>
                        <span>Coleção:</span>
                        <h3>{produto?.colecao}</h3>
                    </div>
                    <br />
                    <div className={styles.descricao}>
                        <p>{produto?.descricao}</p>
                    </div>
                </div>
                <div>
                    <div className={styles.lateralComentario}>
                        <div>
                            <div className={styles.nota}>
                                <span>Nota: </span>
                                <span>{produto?.avaliacao}</span>
                            </div>
                            <div className={styles.comentarios}>
                            <div className={styles.comentariosNome}> <h2>João Pedro</h2> <span>@JoaoPedro</span></div>
                                <span>Este personagem é demais!</span>
                            </div>
                            <div className={styles.comentarios}>
                            <div className={styles.comentariosNome}> <h2>Maria Joaquina</h2> <span>@MariaJ</span></div>
                                <span>Tentei comprar ele e não consegui!</span>
                            </div>
                            <div className={styles.comentarios}>
                                <div className={styles.comentariosNome}> <h2>Carlos</h2> <span>@Carlos.trikas</span></div>
                                <span>Meu sonho de infância.</span>
                            </div>
                        </div>
                        <div>
                            <textarea className={styles.adicionarComentario} name="comentar" id="comentar" placeholder="Adicione um comentário"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}