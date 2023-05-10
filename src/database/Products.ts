
type Product = {
    id: number;
    nome: string;
    colecao?: string;
    categoria: string;
    descricao: string;
    avaliacao: number;
    imageUrl: string;
    marca: string;
    dono: string;
}


export const productsData: Product[] = [
    {
        id: 1,
        avaliacao: 5,
        categoria: 'Bonequinho',
        colecao: 'Rise',
        descricao: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.",
        nome: "Wargreymon",
        imageUrl: "https://cdn.awsli.com.br/600x450/184/184312/produto/95966279/f8136614b1.jpg",
        marca: 'Digimon',
        dono: "Batman Soares",
    },
    {
        id: 2,
        avaliacao: 4,
        categoria: 'Action Figure',
        colecao: 'DC Massa',
        descricao: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.",
        nome: "Batma",
        imageUrl: "https://cf.shopee.com.br/file/baf8660fd06c57858d6d34a3c9bf8078",
        marca: 'DC',
        dono: "Batman Soares"
    },
    {
        id: 3,
        avaliacao: 4,
        categoria: 'Action Figure',
        colecao: 'Avengers Assemble',
        descricao: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.",
        nome: "Homem Aranha",
        imageUrl: "https://brincamundo.com.br/wp-content/uploads/2023/04/spiderman-action-figure.webp",
        marca: 'Marvel',
        dono: "Batman Soares"
    },
    {
        id: 4,
        avaliacao: 3,
        categoria: 'Bonequinho',
        colecao: 'Dioramas',
        descricao: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.",
        nome: "Naruto e Kurama",
        imageUrl: "https://img.joomcdn.net/9ad3d04358bd8759da21d9a78fc9ce82a115d9c5_original.jpeg",
        marca: 'Naruto',
        dono: "Batman Soares"
    },
    {
        id: 5,
        avaliacao: 4,
        categoria: 'Action Figure',
        colecao: 'Avengers Assemble',
        descricao: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.',
        nome: "Homem de Ferro",
        imageUrl: "https://cf.shopee.com.br/file/355a57a51d7d2b945a40680bf6d82d2f",
        marca: 'Marvel',
        dono: "Batman Soares"
    },
    {
        id: 6,
        avaliacao: 2,
        categoria: 'Séries',
        colecao: 'LOST',
        descricao: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.",
        nome: "Lost Coleção completa [Blue-ray]",
        imageUrl: "https://m.media-amazon.com/images/I/51KoYHIOH5L._AC_UF894,1000_QL80_.jpg",
        marca: 'LOST',
        dono: "Batman Soares"
    },
    {
        id: 7,
        avaliacao: 3,
        categoria: 'Mangá',
        colecao: 'One Piece',
        descricao: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.",
        nome: "One Piece nº 1",
        imageUrl: "https://cf.shopee.com.br/file/ce4ed03217a6920b74b4c5929fc0db07",
        marca: 'One Piece',
        dono: "Jõao Pedro"
    },
    {
        id: 8,
        avaliacao: 4,
        categoria: 'Outros',
        colecao: 'Mortal Kombat',
        descricao: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.',
        nome: "Máscara Scorpion MK 11 Edição Colecionador",
        imageUrl: "https://i.ytimg.com/vi/vZyvdEBuERk/maxresdefault.jpg",
        marca: 'Netherealm',
        dono: "Maria Joaquina"
    },
    {
        id: 9,
        avaliacao: 2,
        categoria: 'Action Figure',
        colecao: 'DC Designer Series',
        descricao: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.",
        nome: "Asa Noturna ",
        imageUrl: "https://static3.tcdn.com.br/img/img_prod/460977/pre_venda_estatua_asa_noturna_nightwing_13_dc_designer_series_by_jim_lee_dc_collectibles_45168_1_20201211173447.jpg",
        marca: 'DC',
        dono: "Carlos Trikas"
    }
]