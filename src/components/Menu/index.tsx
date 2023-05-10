"use client"

import { useRouter } from "next/navigation";
import { useSession } from "@/hooks/useSession";
import Link from "next/link";
import { useState } from "react";
import { X } from "@phosphor-icons/react"


export function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);
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
            <div className="mx-auto max-w-screen-xl p-4 relative">
                <div className="flex items-center justify-between gap-4 lg:gap-10 ">
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
                        <Link className="text-gray-300 hover:text-gray-100" href="/home">Home</Link>
                        <Link className="text-gray-300 hover:text-gray-100" href="/eventos">Próximos eventos</Link>
                        <Link className="text-gray-300 hover:text-gray-100" href="/novo">Novo colecionavel</Link>
                        <Link className="text-gray-300 hover:text-gray-100" href="/perfil">Minha coleção</Link>

                    </nav>

                    <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
                        <button
                            className="
                                rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500
                                hover:bg-slate-600 transition-all hover:text-gray-200"
                            onClick={handleLogout}
                        >
                            Log out
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="rounded-lg bg-gray-100 p-2 text-gray-600" type="button"
                        >
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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                    {menuOpen && (
                        <nav className="bg-slate-900 absolute z-10 w-full top-0 left-0 pb-4 transition">
                            <div className="flex w-full justify-end p-2">
                                <button
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    className="
                                    rounded-lg text-white" type="button"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Link className="text-gray-300 hover:text-gray-100 hover:underline" href="/home" onClick={() => setMenuOpen(false)}>Home</Link>
                                <Link className="text-gray-300 hover:text-gray-100 hover:underline" href="/eventos" onClick={() => setMenuOpen(false)}>Próximos eventos</Link>
                                <Link className="text-gray-300 hover:text-gray-100 hover:underline" href="/novo" onClick={() => setMenuOpen(false)}>Novo colecionavel</Link>
                                <Link className="text-gray-300 hover:text-gray-100 hover:underline" href="/perfil" onClick={() => setMenuOpen(false)}>Minha coleção</Link>
                            </div>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    )
}