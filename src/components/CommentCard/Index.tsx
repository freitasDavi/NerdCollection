/* eslint-disable @next/next/no-img-element */

import { Rating } from "../Rating";

interface CommentCardProps {
    nome: string;
    pic: string;
    comentario: string;
}

export function CommentCard({ nome, pic, comentario }: CommentCardProps) {
    return (
        <div className="flex gap-2 mb-6">
            <img
                className="w-12 h-12 rounded-full object-cover"
                src={pic} alt={nome} />
            <div className="flex flex-col gap-1 items-start">
                <div className="flex gap-4 items-center">
                    <h4 className="text-md font-bold text-gray-400 text-center">{nome}</h4>
                    <Rating small />
                </div>
                <span className="font-md font-medium text-gray-200">{comentario}</span>
            </div>

        </div>
    )
}