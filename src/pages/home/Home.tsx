import "./style.scss"



export default function Home(){

    type item = {
      
        name: string;
        description: string;
        price: string;
        photo1: string;
        photo2: string;
     
      };
    const List = [
        {
            name: 'produto 1',
            price: 'R$ 200',
            description: 'produto de 240 metros',
            photo01: 'https://cdn.discordapp.com/attachments/1037425403985399841/1119234277817729064/servicos.jpg',
            photo02: 'https://cdn.discordapp.com/attachments/1037425403985399841/1116066887080620113/post-10.jpg'
        },
        {
            name: 'produto 2',
            preço: 'R$ 100',
            descrição: 'produto de 640 metros',
            imagem01: 'https://cdn.discordapp.com/attachments/1037425403985399841/1113546723101511821/post-08.jpg',
            imagem02: 'https://cdn.discordapp.com/attachments/1037425403985399841/1112791642391445574/post-06.jpg'
        }
    ]

    const roadItem = List.map((item: typeof List) => 
    <div>
        <h1>name.item</h1>
    </div> )
    return(
        <div className="container">
            {roadItem}
        </div>
    )
}