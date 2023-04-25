"use client";

import Link from "next/link";
import { ReactNode } from "react";

type NavItemProps = {
    name: string,
    path: string,
    children: ReactNode
}


export const NavItem = ({ name, path, children }: NavItemProps) => {
    return (
        <li>
            <Link href={path} className="group relative flex justify-center rounded px-2 py-1.5 text-gray-50
                                            hover:bg-gray-50 hover:text-gray-700">

                {children}
                <span
                    className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                >
                    {name}
                </span>
            </Link>
        </li>
    )
}