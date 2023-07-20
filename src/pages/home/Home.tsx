import { useState } from "react";
import "./style.scss";
import ReactModal from "react-modal";
import Modal from "../../components/modal/Modal";

type ListItem = {
  id: string;
  name: string;
  alt: string;
  description: string;
  price: string;
  photo1: string;
  photo2: string;
  photo3: string;
  photo4: string;
  photo5: string;
  photo6: string;
};

const customStyles = {
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "85%",
    border: "2px solid #0090cb",
    zIndex: "1000",
    marginTop: "5vh",
  },
};

export default function Home() {
  const List: ListItem[] = [
    {
      id: "1",
      name: "Ombrelone Redondo (S/Abas)",
      alt: "Ombrelone de 2,40mt",
      price: "R$ 370,00",
      description: "Ombrelone de 2,40mt",
      photo1:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1130556033996177468/ombrelone-redondo-2mt.jpg",
      photo2:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1130556033996177468/ombrelone-redondo-2mt.jpg",
      photo3:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1131641428074823801/WhatsApp_Image_2023-07-06_at_09.12.19_1.jpeg",
      photo4:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1131641428330684478/WhatsApp_Image_2023-07-06_at_09.12.19.jpeg",
      photo5:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1131645104214515804/WhatsApp_Image_2023-07-07_at_16.53.49.jpeg",
      photo6:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1131645104705253386/WhatsApp_Image_2023-07-07_at_16.53.51.jpeg",
    },
    {
      id: "2",
      name: "Ombrelone Redondo (C/Abas)",
      alt: "Ombrelone de 2,40mt",
      price: "R$ 385,00",
      description: "Ombrelone de 2,40mt",
      photo1:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1130556034344292445/ombrelone-redondo-com-aba.jpg",
      photo2:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1131646099862597834/WhatsApp_Image_2023-07-07_at_16.53.53.jpeg",
      photo3:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1131646100399460362/WhatsApp_Image_2023-07-07_at_16.53.50.jpeg",
      photo4:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1131647345856098405/WhatsApp_Image_2023-07-06_at_09.12.18.jpeg",
      photo5:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1131653179046625411/1-5.jpg",
      photo6:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1131662473330688140/3-xpbkuo.jpg",
    },
    {
      id: "3",
      name: "Ombrelone Quadrado (S/Abas)",
      alt: "Ombrelone quadrado",
      price: "R$ 330,00",
      description: "Ombrelones de 1,67 x 1,67 mt",
      photo1:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1130556033580929115/ombrelone-quadrado-branco.jpg",
      photo2:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1131674972809597068/WhatsApp_Image_2023-07-06_at_08.50.21.jpeg",
    },
    {
      id: "4",
      name: "Ombrelone Quadrado (C/Abas)",
      alt: "Ombrelone quadrado",
      price: "R$ 350,00",
      description: "Ombrelones de 1,67 x 1,67 mt",
      photo1:
        "https://cdn.discordapp.com/attachments/1037425403985399841/1130556033207648427/ombrelone-amarelo-com-aba-branco.jpg",
    },
  ];

  const [modalCard, setModalCard] = useState<ListItem[]>([]);

  const roadItem = List.map((item: ListItem) => (
    <div
      key={item.id}
      className="containerCard"
      onClick={() => openModal(item)}
    >
      <img src={item.photo1} alt={item.alt} />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <h2>{item.price}</h2>
    </div>
  ));

  const [modalOpen, setModalOpen] = useState(false);

  function openModal(item: ListItem) {
    setModalCard([item]);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="container">
      {roadItem}

      <ReactModal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Modal modalCard={modalCard} closeModal={closeModal} List={List} />
      </ReactModal>
    </div>
  );
}
