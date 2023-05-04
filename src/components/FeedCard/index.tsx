

export default function FeedCard() {
    return (
        <a href="#" className="block group w-full pb-4 border-b-[1px] border-gray-600">
            <img
                src="https://cf.shopee.com.br/file/ce4ed03217a6920b74b4c5929fc0db07"
                alt=""
                className="sm:h-[450px] lg:h-[300px] w-full object-cover  rounded-lg"
            />

            <div className="mt-3 px-4">
                <div className="flex justify-between">
                    <h3
                        className="text-sm text-gray-200 group-hover:underline group-hover:underline-offset-4"
                    >
                        One Piece nº 1
                    </h3>
                    <span className="flex items-center gap-2">
                        <p className="text-xs">por</p>
                        <h4 className="text-sm text-gray-100 ">Batman Rodrigues</h4>
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