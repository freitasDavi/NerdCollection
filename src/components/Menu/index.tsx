"use client"

import { useRouter } from "next/navigation";
import { useSession } from "@/hooks/useSession";
import Link from "next/link";


export function Menu() {
    const { logout } = useSession();
    const navigation = useRouter();

    const handleLogout = () => {
        logout();

        setTimeout(() => {
            navigation.push("/login");
        }, 500);
    }

    return (
        <header aria-label="Site Header" className="shadow-sm">
            <div className="mx-auto max-w-screen-xl p-4">
                <div className="flex items-center justify-between gap-4 lg:gap-10">
                    <div className="flex lg:w-0 lg:flex-1">
                        <Link href="/home">
                            <span className="sr-only">Logo</span>
                            <span className="
                                 h-10 w-16 rounded-lg bg-gray-200
                                flex justify-center items-center font-black tracking-widest text-2xl
                                ">
                                NC
                            </span>
                        </Link>
                    </div>

                    <nav
                        aria-label="Site Nav"
                        className="hidden gap-8 text-sm font-medium md:flex"
                    >
                        <Link className="text-gray-500" href="/home">Home</Link>
                        <Link className="text-gray-500" href="/anuncios">Anuncios</Link>
                        <Link className="text-gray-500" href="/novo">Novo colecionavel</Link>
                        <Link className="text-gray-500" href="/perfil">Minha coleção</Link>

                    </nav>

                    <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
                        <button
                            className="
                                rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500
                                hover:bg-blue-600 transition-all hover:text-gray-200"
                            onClick={handleLogout}
                        >
                            Log out
                        </button>

                        {/* <a
                            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
                            href=""
                        >
                            Sign up
                        </a> */}
                    </div>

                    <div className="lg:hidden">
                        <button className="rounded-lg bg-gray-100 p-2 text-gray-600" type="button">
                            <span className="sr-only">Open menu</span>
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 6h16M4 12h16M4 18h16"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        // <div className="w-16 h-screen flex flex-col justify-between border-r border-gray-800 bg-blue-950">
        //     <div id="user-card" className="inline-flex h-16 w-16 items-center justify-center">
        //         <Image
        //             alt="dc and marvel logo mixed"
        //             src={logo}
        //             width={60}
        //             height={60}
        //         />
        //     </div>
        //     <div className="">
        //         <nav className="flex flex-col p-2">
        //             {/* <div className="py-4">
        //                             <a href="#" className="relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700">
        //                                 <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     className="h-5 w-5 opacity-75"
        //                                     fill="none"
        //                                     viewBox="0 0 24 24"
        //                                     stroke="currentColor"
        //                                     stroke-width="2"
        //                                 >
        //                                     <path
        //                                         stroke-linecap="round"
        //                                         stroke-linejoin="round"
        //                                         d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        //                                     />
        //                                     <path
        //                                         stroke-linecap="round"
        //                                         stroke-linejoin="round"
        //                                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        //                                     />
        //                                 </svg>

        //                                 <span
        //                                     className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
        //                                 >
        //                                     General
        //                                 </span>
        //                             </a>
        //                         </div> */}
        //             <ul className="space-y-1 border-t border-b border-gray-100 py-4">
        //                 <NavItem
        //                     name="Home"
        //                     path="/home"
        //                 >
        //                     <House width={40} height={40} />
        //                 </NavItem>
        //                 <NavItem
        //                     name="Perfil"
        //                     path="/perfil"
        //                 >
        //                     <Users width={40} height={40} />
        //                 </NavItem>
        //                 <NavItem
        //                     name="Anúncios"
        //                     path="/annoucements"
        //                 >
        //                     <Megaphone width={40} height={40} />
        //                 </NavItem>
        //                 <NavItem
        //                     name="Sei la"
        //                     path="/"
        //                 >
        //                     <House width={40} height={40} />
        //                 </NavItem>
        //             </ul>
        //         </nav>
        //     </div>
        //     <div className="border-t border-gray-100 p-2 py-4">
        //         <form action="/logout">
        //             <button
        //                 type="button"
        //                 onClick={handleLogout}
        //                 className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm 
        //                                  text-white hover:bg-white hover:text-red-500"
        //             >
        //                 <SignOut width={40} height={40} />
        //                 <span
        //                     className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
        //                 >
        //                     Logout
        //                 </span>
        //             </button>
        //         </form>
        //     </div>
        // </div>
    )
}