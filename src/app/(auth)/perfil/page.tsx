import { BonecoCard } from "@/components/BonecoCard";

export default function Perfil() {
    return (
        <main className=" bg-gray-900 min-h-screen flex justify-center content-center pt-8">
            <div className="w-3/4">
                <h1 className="text-6xl text-white mb-4 font-dongle">Meu perfil</h1>
                <div className="bg-gray-700 min-h-[400px] rounded-lg p-4">
                    <div id="info" className="w-full bg-gray-600 min-h-[300px] rounded-lg mb-4 flex p-4 pt-8">
                        <img
                            className="rounded-full w-40 h-40"
                            src="https://easydrawingguides.com/wp-content/uploads/2017/01/How-to-draw-batmans-face-19.png"
                            alt="profile"
                        />
                        <div>
                            <h2 className="text-5xl text-white mb-0 font-dongle">Oi, eu sou o Batman</h2>
                            <h4 className="font-sans text-gray-300 mb-2">Colecionador ha 5 anos</h4>
                            <p className="font-sans text-white font-roboto">
                                Minha grande bio
                                lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, enim. Quod tempore impedit nulla illo vero ut sed. Ipsum minima molestiae eligendi impedit dolor harum quibusdam odio tempora, qui id?
                                lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore sequi, omnis ullam saepe officiis quaerat asperiores recusandae reiciendis velit. Et quo nam sunt laborum error dolores ab porro explicabo repudiandae.
                            </p>
                        </div>
                    </div>
                    <article className="flex flex-col gap-4">
                        <h2 className="text-white font-roboto text-2xl font-medium pl-4">Meus colecionáveis</h2>
                        <div id="catalog" className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1">
                            <BonecoCard
                                colecao="Marvel Legends"
                                nome="Homem de Ferro 2"
                                imageUrl="https://cf.shopee.com.br/file/355a57a51d7d2b945a40680bf6d82d2f"
                            />
                            <BonecoCard
                                colecao="DC Multiverse"
                                nome="Batman do melhor desenho"
                                imageUrl="https://cf.shopee.com.br/file/baf8660fd06c57858d6d34a3c9bf8078"
                            />
                            <BonecoCard
                                colecao="Marvel Legends"
                                nome="O Espetacular Homem Aranha"
                                imageUrl="https://brincamundo.com.br/wp-content/uploads/2023/04/spiderman-action-figure.webp"
                            />
                        </div>
                    </article>
                </div>
            </div>
        </main>
    )
}