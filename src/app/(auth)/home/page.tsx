import Comentario from "@/components/Comentario";
import FeedCard from "@/components/FeedCard";

export default function Page() {
    return (
        <main className="w-full bg-slate-900 min-h-full flex justify-center">
            <section id="feed" className="w-full max-w-2xl bg-gray-800 min-h-screen flex flex-col gap-10 p-11 rounded-lg">
                <Comentario />
                <FeedCard />
                <FeedCard />
                <FeedCard />

            </section>
        </main>
    )
}