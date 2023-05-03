import Link from "next/link";


export default function Login() {
    return (
        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6">
                <label
                    htmlFor="Email"
                    className="block text-sm font-medium  text-gray-200"
                >
                    Email
                </label>

                <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md p-2 border-gray-200 text-sm shadow-sm bg-gray-800 text-gray-200"
                />
            </div>
            <div className="col-span-6">
                <label
                    htmlFor="senha"
                    className="block text-sm font-medium  text-gray-200"
                >
                    Senha
                </label>

                <input
                    type="password"
                    id="senha"
                    name="senha"
                    className="mt-1 w-full rounded-md p-2 border-gray-200 text-sm shadow-sm bg-gray-800 text-gray-200"
                />
            </div>

            <div className="col-span-6 flex justify-between items-center sm:flex sm:items-center sm:gap-4">
                <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 hover:bg-blue-700"
                >
                    Login
                </button>

                <p className="mt-4 text-sm  text-gray-400 sm:mt-0">
                    Não tem uma conta?
                    <Link href="/register" className="mx-1 underline text-gray-200">
                        Cadastre-se
                    </Link>.
                </p>
            </div>
        </form>
    )
}