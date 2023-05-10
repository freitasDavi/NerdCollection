"use client";
import { Input } from "@/components/Input";
import { useRouter } from "next/navigation";


export default function Novo() {
    const navigation = useRouter();

    const salvar = () => {
        navigation.push("/perfil")
    }

    return (
        <main className=" bg-gray-800 min-h-screen flex justify-center content-center pt-8 bg-opacity-30">
            <div className="w-4/6">
                <h2 className="text-2xl font-bold text-gray-200 px-6">Novo colecionável</h2>
                <form className="w-full p-6 flex flex-col gap-6">
                    <div className="flex gap-6 ">
                        <Input
                            title="Nome"
                            placeholder="Peter Parker"
                        />
                        <Input
                            title="Coleção"
                            placeholder="Marvel Assemble"
                        />
                    </div>
                    <div className="flex gap-6 ">
                        <label className="w-full
                            flex flex-col text-gray-300
                            font-medium gap-2"
                        >
                            Categoria
                            <select name="" id="" className="rounded-md p-2
                                    text-gray-600
                                    placeholder:text-gray-500"
                            >
                                <option value="sim" className="p-4">Action figure</option>
                                <option value="nao">HQ</option>
                                <option value="nao">Mangá</option>
                                <option value="nao">Games</option>
                                <option value="nao">Séries</option>
                                <option value="nao">Outros</option>
                            </select>
                        </label>
                        <Input
                            title="Franquia"
                            placeholder="Naruto, Homem Aranha, Mortal Kombat"
                        />
                    </div>
                    <div className="flex gap-6 ">
                        <Input
                            title="Marca"
                            placeholder="Marvel, DC, Shonem Jump"
                        />
                        <label className="w-full
                            flex flex-col text-gray-300
                            font-medium gap-2"
                        >
                            A Venda?
                            <select name="" id="" className="rounded-md p-2
                                    text-gray-600
                                    placeholder:text-gray-500"
                            >
                                <option value="sim" className="p-4">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex gap-6 ">
                        <label className="
                            w-full flex flex-col text-gray-300
                            font-medium gap-2"
                        >
                            Descrição (opcional)
                            <textarea
                                className="rounded-md p-2
                                text-gray-900
                                placeholder:text-gray-500"
                            />
                        </label>
                    </div>
                    <div className="flex gap-6 items-end">
                        <label className="w-full
                            flex flex-col text-gray-300
                            font-medium gap-2"
                        >
                            Imagem
                            <input type="file" className="
                                block w-full text-sm text-gray-500 
                                file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold 
                                file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                        </label>
                        <button className="bg-blue-500 text-white py-1 px-6 h-10 rounded-lg hover:bg-blue-900 transition ease-in" type="button" onClick={salvar}>
                            Salvar
                        </button>
                    </div>
                </form>
            </div >
        </main >
    )
}