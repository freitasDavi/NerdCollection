interface BonecoCardProps  {
    imageUrl?: string;
    colecao : string;
    nome: string;
}

export const BonecoCard = ({ imageUrl, colecao, nome } : BonecoCardProps) => {
    const image = imageUrl ? imageUrl : "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80";
    
    return (
        <a href="#" className="block rounded-lg p-4 ">
            <img
            alt="Home"
            src={image}
            className="h-96 w-full rounded-md object-cover border-t-4 border-red-400"
            />
            <div className="mt-2">
                <div>
                    <div>
                        <div className="sr-only">Coleção</div>
                        <div className="text-sm text-gray-300">{colecao}</div>
                    </div>
            
                    <div>
                        <div className="sr-only">Nome</div>
                        <div className="font-medium text-white">{nome}</div>
                    </div>
                </div>

            </div>
      </a>
    )
}