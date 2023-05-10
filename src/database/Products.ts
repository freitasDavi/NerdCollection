
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
        id: 2,
        avaliacao: 5,
        categoria: 'Bonequinho',
        colecao: 'Rise',
        descricao: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.",
        nome: "Wargreymon",
        imageUrl: "https://cdn.awsli.com.br/600x450/184/184312/produto/95966279/f8136614b1.jpg",
        marca: 'Digimon'
    },
    {
        id: 2,
        avaliacao: 4,
        categoria: 'Action Figure',
        colecao: 'DC Massa',
        descricao: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.",
        nome: "Batma",
        imageUrl: "https://cf.shopee.com.br/file/baf8660fd06c57858d6d34a3c9bf8078",
        marca: 'DC'
    },
    {
        id: 1,
        avaliacao: 4,
        categoria: 'Action Figure',
        colecao: 'Avengers Assemble',
        descricao: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.",
        nome: "Homem Aranha",
        imageUrl: "https://brincamundo.com.br/wp-content/uploads/2023/04/spiderman-action-figure.webp",
        marca: 'Marvel'
    },
    {
        id: 1,
        avaliacao: 3,
        categoria: 'Bonequinho',
        colecao: 'Dioramas',
        descricao: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.",
        nome: "Naruto e Kurama",
        imageUrl: "https://img.joomcdn.net/9ad3d04358bd8759da21d9a78fc9ce82a115d9c5_original.jpeg",
        marca: 'Naruto'
    },
    {
        id: 1,
        avaliacao: 4,
        categoria: 'Action Figure',
        colecao: 'Avengers Assemble',
        descricao: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.',
        nome: "Homem de Ferro",
        imageUrl: "https://cf.shopee.com.br/file/355a57a51d7d2b945a40680bf6d82d2f",
        marca: 'Marvel'
    },
    {
        id: 1,
        avaliacao: 2,
        categoria: 'Séries',
        colecao: 'LOST',
        descricao: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.",
        nome: "Lost Coleção completa [Blue-ray]",
        imageUrl: "https://m.media-amazon.com/images/I/51KoYHIOH5L._AC_UF894,1000_QL80_.jpg",
        marca: 'LOST'
    }
]