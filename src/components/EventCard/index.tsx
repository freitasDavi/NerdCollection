export interface EventCardProps {
    id: number;
    img: string;
    title: string;
    date: string;
    resumo: string;
    url?: string;
}


export function EventCard({ date, img, resumo, title }: EventCardProps) {
    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
                alt="Office"
                src={img}
                className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
                <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                    {date}
                </time>

                <h3 className="mt-0.5 text-lg text-gray-900">
                    {title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {resumo}
                </p>
            </div>
        </article>
    )
}