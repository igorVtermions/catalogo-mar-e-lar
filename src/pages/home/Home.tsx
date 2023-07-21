import "./style.scss";

type ListItem = {
  id: number;
  name: string;
  alt: string;
  price: string;
  photo1: string;
  photo2: string;
};

export default function Home() {
  const List: ListItem[] = [
    {
      id: 1,
      name: "ombrelone de 2,40mt (S/Aba)",
      alt: "Ombrelone de 2,40mt",
      price: "R$ 370,00",
      photo1:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1130556033996177468/ombrelone-redondo-2mt.jpg",
      photo2:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1116066887080620113/post-10.jpg",
    },
    {
      id: 2,
      name: "produto 2",
      alt: "Ombrelone Quadrado 1,60mt",
      price: "R$ 100",
      photo1:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1130556033580929115/ombrelone-quadrado-branco.jpg",
      photo2:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1112791642391445574/post-06.jpg",
    },
  ];

  const roadItem = List.map((item: ListItem) => (
    <div key={item.id} className="container">
      <img src={item.photo1} alt={item.alt} className="fistImg" />
      <h1>{item.name}</h1>
      <h2>{item.price}</h2>
    </div>
  ));

  return (
    <section>
      {roadItem}
    </section>
  )
}
