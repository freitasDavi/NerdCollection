import { Input } from "@/components/Input";


export default function Novo() {
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
                        <label className="
                            w-full flex flex-col text-gray-300
                            font-medium gap-2"
                        >
                            Descrição
                            <textarea
                                className="rounded-md p-2
                                text-gray-900
                                placeholder:text-gray-500"
                            />
                        </label>
                    </div>
                </form>
            </div >
        </main >
    )
}