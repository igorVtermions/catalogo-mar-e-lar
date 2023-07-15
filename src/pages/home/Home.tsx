import "./style.scss";

type ListItem = {
  id: number;
  name: string;
  alt: string;
  description: string;
  price: string;
  photo1: string;
  photo2: string;
};

export default function Home() {
  const List: ListItem[] = [
    {
      id: 1,
      name: "produto 1",
      alt: "Ombrelone de 2,40mt",
      price: "R$ 200",
      description: "produto de 240 metros",
      photo1:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1119234277817729064/servicos.jpg",
      photo2:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1116066887080620113/post-10.jpg",
    },
    {
      id: 2,
      name: "produto 2",
      alt: "Ombrelone Quadrado 1,60mt",
      price: "R$ 100",
      description: "produto de 640 metros",
      photo1:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1113546723101511821/post-08.jpg",
      photo2:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1112791642391445574/post-06.jpg",
    },
  ];

  const roadItem = List.map((item: ListItem) => (
    <div key={item.id}>
      <img src={item.photo1} alt={item.alt} />
      <img src={item.photo2} alt={item.alt} />
      <h1>{item.name}</h1>
      <h2>{item.price}</h2>
      <p>{item.description}</p>
    </div>
  ));

  return <div className="container">{roadItem}</div>;
}
