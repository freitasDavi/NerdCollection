interface FeedCardProps {
    nome: string;
    dono: string;
    image: string;
}

export default function FeedCard({ nome, dono, image }: FeedCardProps) {
    return (
        <a href="#" className="block group w-full pb-4 border-b-[1px] border-gray-600">
            <img
                src={image}
                alt=""
                className="sm:h-[450px] lg:h-[400px] w-full object-cover object-top  rounded-lg"
            />

            <div className="mt-3 px-4">
                <div className="flex justify-between">
                    <h3
                        className="text-sm text-gray-200 group-hover:underline group-hover:underline-offset-4"
                    >
                        {nome}
                    </h3>
                    <span className="flex items-center gap-2">
                        <p className="text-xs text-gray-300">por</p>
                        <h4 className="text-sm text-gray-100 ">{dono}</h4>
                    </span>
                </div>

                <p className="mt-1.5 text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam
                    ab maiores placeat odio id?
                </p>
            </div>
        </a>
    )
}