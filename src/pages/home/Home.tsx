import "./style.scss";

type ListItem = {
  id: number;
  name: string;
  alt: string;
  description: string;
  price: string;
  photo1: string;
};

export default function Home() {
  const List: ListItem[] = [
    {
      id: 1,
      name: "Ombrelone Redondo (S/Abas)",
      alt: "Ombrelone de 2,40mt",
      price: "R$ 370,00",
      description: "Ombrelone de 2,40mt",
      photo1:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1130556033996177468/ombrelone-redondo-2mt.jpg",
    },
    {
      id: 2,
      name: "Ombrelone Redondo (C/Abas)",
      alt: "Ombrelone de 2,40mt",
      price: "R$ 385,00",
      description: "Ombrelone de 2,40mt",
      photo1:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1130556034344292445/ombrelone-redondo-com-aba.jpg",
    },
    {
      id: 3,
      name: "Ombrelone Quadrado (S/Abas)",
      alt: "Ombrelone quadrado",
      price: "R$ 330,00",
      description: "Ombrelones de 1,67 x 1,67 mt",
      photo1:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1130556033580929115/ombrelone-quadrado-branco.jpg",
    },
    {
      id: 4,
      name: "Ombrelone Quadrado (C/Abas)",
      alt: "Ombrelone quadrado",
      price: "R$ 350,00",
      description: "Ombrelones de 1,67 x 1,67 mt",
      photo1:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1130556033207648427/ombrelone-amarelo-com-aba-branco.jpg",
    },
  ];

  const roadItem = List.map((item: ListItem) => (
    <div key={item.id} className="containerCard">
      <img src={item.photo1} alt={item.alt} />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <h2>{item.price}</h2>
    </div>
  ));

  return <div className="container">{roadItem}</div>;
}
