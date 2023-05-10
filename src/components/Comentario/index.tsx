

interface ComentarioProps {
    placeholder?: string;
}

export default function Comentario({ placeholder = "Comprou algo novo? Nos mostre!" }: ComentarioProps) {
    return (
        <div className="w-full flex gap-2">
            <img
                className="rounded-full w-16 h-16"
                src="https://pbs.twimg.com/profile_images/1629220015319797761/yCs_jo_U_400x400.jpg"
            />
            <textarea
                placeholder={placeholder}
                className="w-full rounded-lg 
                bg-transparent border-gray-800 border-[2px] pt-2 pb-4 px-2
                placeholder:text-sm placeholder:text-gray-400
                focus-within:border-red-500 focus:ring-red-500
                text-gray-200"
            />
        </div>
    )
}