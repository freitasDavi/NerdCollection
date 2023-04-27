
type Product = {
    id: number;
    nome: string;
    colecao?: string;
    categoria: string;
    descricao: string;
    avaliacao: number;
    imageUrl: string;
    marca: string;
}

export const productsData: Product[] = [
    {
        id: 1,
        avaliacao: 4,
        categoria: 'Bonequinho',
        colecao: 'Avengers Assemble',
        descricao: "Llaaalalal",
        nome: "Homem de Ferro",
        imageUrl: "https://cf.shopee.com.br/file/355a57a51d7d2b945a40680bf6d82d2f",
        marca: 'Marvel'
    },
    {
        id: 2,
        avaliacao: 4,
        categoria: 'Bonequinho',
        colecao: 'DC Massa',
        descricao: "Llaaalalal",
        nome: "Batma",
        imageUrl: "https://cf.shopee.com.br/file/baf8660fd06c57858d6d34a3c9bf8078",
        marca: 'DC'
    },
    {
        id: 1,
        avaliacao: 4,
        categoria: 'Bonequinho',
        colecao: 'Avengers Assemble',
        descricao: "Llaaalalal",
        nome: "Homem Aranha",
        imageUrl: "https://brincamundo.com.br/wp-content/uploads/2023/04/spiderman-action-figure.webp",
        marca: 'Marvel'
    },
    {
        id: 1,
        avaliacao: 4,
        categoria: 'Bonequinho',
        colecao: 'Avengers Assemble',
        descricao: "Llaaalalal",
        nome: "Homem de Ferro",
        imageUrl: "https://cf.shopee.com.br/file/355a57a51d7d2b945a40680bf6d82d2f",
        marca: 'Marvel'
    },
    {
        id: 2,
        avaliacao: 4,
        categoria: 'Bonequinho',
        colecao: 'DC Massa',
        descricao: "Llaaalalal",
        nome: "Batma",
        imageUrl: "https://cf.shopee.com.br/file/baf8660fd06c57858d6d34a3c9bf8078",
        marca: 'DC'
    },
    {
        id: 1,
        avaliacao: 4,
        categoria: 'Bonequinho',
        colecao: 'Avengers Assemble',
        descricao: "Llaaalalal",
        nome: "Homem Aranha",
        imageUrl: "https://brincamundo.com.br/wp-content/uploads/2023/04/spiderman-action-figure.webp",
        marca: 'Marvel'
    }
]