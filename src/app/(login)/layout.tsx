import { ReactNode } from "react";


export default function LoginLayout({ children }: { children: ReactNode }) {
    return (
        <section className="bg-gray-900">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside
                    className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
                >
                    <img
                        alt="Pattern"
                        src="https://w0.peakpx.com/wallpaper/674/693/HD-wallpaper-avengers-assemble-for-fight-marvels-super-hero-superhero-the-avengers.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>
                <main
                    aria-label="Main"
                    className="flex items-center justify-center px-8 py-8 
                        sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <h1
                            className="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl"
                        >
                            Bem vindo ao NerdCollection 🦸🏻
                        </h1>
                        <p className="mt-4 leading-relaxed text-gray-500 font-roboto dark:text-gray-400">
                            A maior rede de colecionadores de action figures, hqs, mangás e posteres do brasil.
                        </p>
                        {children}
                    </div>
                </main>
            </div>
        </section>
    )
}