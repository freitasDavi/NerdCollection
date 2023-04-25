import { Menu } from "@/components/Menu";
import { Dongle, Roboto } from "next/font/google";


const roboto = Roboto({
    weight: ['300', '400', '500'],
    subsets: ['latin'],
    variable: '--roboto'
})

const dongle = Dongle({
    subsets: ['latin-ext'],
    weight: ['400'],
    variable: '--dongle'
})


export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt">
            <head />
            <body className={`${roboto.variable} ${dongle.variable}`}>
                <main className="flex">
                    <Menu />
                    <section className="flex-1">
                        {children}
                    </section>
                </main>
            </body>
        </html>
    )
}