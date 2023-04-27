import Link from "next/link";


export default function Register() {
    return (
        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-200"
                >
                    Nome
                </label>

                <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 p-2 w-full rounded-md border-gray-200 text-sm shadow-sm  bg-gray-800 text-gray-200"
                />
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-200"
                >
                    Nickname
                </label>

                <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md border-gray-200 text-sm shadow-sm p-2 bg-gray-800 text-gray-200"
                />
            </div>

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

            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-200"
                >
                    Senha
                </label>

                <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md p-2 border-gray-200 text-sm shadow-sm bg-gray-800 text-gray-200"
                />
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium  text-gray-200"
                >
                    Confirmação de senha
                </label>

                <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 w-full rounded-md p-2 border-gray-200 text-sm  shadow-sm bg-gray-800 text-gray-200"
                />
            </div>

            <div className="col-span-6">
                <label
                    htmlFor="Email"
                    className="block text-sm font-medium  text-gray-200"
                >
                    Foto de perfil (url)
                </label>

                <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md p-2 border-gray-200 text-sm shadow-sm bg-gray-800 text-gray-200"
                />
                <p className="text-xs  text-gray-400">A gente tava com pouca verba pra salvar as imagens no banco</p>
            </div>

            <div className="col-span-6">
                <label
                    htmlFor="Email"
                    className="block text-sm font-medium  text-gray-200"
                >
                    Biografia (opcional)
                </label>

                <textarea
                    id="bio"
                    name="bio"
                    className="mt-1 w-full rounded-md p-2 border-gray-200 text-sm shadow-sm bg-gray-800 text-gray-200"
                />
            </div>


            <div className="col-span-6">
                <p className="text-sm  text-gray-400">
                    Criando uma conta, você aceita nossos
                    <a href="#" className="mx-1 underline text-gray-200">
                        termos e condições
                    </a>
                    e
                    <a href="#" className="mx-1 underline text-gray-200">
                        políticas de privacidade
                    </a>.
                </p>
            </div>

            <div className="col-span-6 flex justify-between items-center sm:flex sm:items-center sm:gap-4">
                <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 hover:bg-blue-700 hover:text-white"
                >
                    Criar
                </button>

                <p className="mt-4 text-sm  text-gray-400 sm:mt-0">
                    Já tem uma conta?
                    <Link href="/login" className="mx-1 underline text-gray-200">
                        LogIn
                    </Link>.
                </p>
            </div>
        </form>
    )
}