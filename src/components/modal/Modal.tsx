import Close from "../../assets/close.svg";
import "./style.scss";
import { register } from "swiper/element";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import whatsapp from "../../assets/whatsapp-logo.svg";
import globe from "../../assets/globe.svg";
register();

type ListItem = {
  id: string;
  name: string;
  alt: string;
  description: string;
  price: string;
  photos: string[];
};

type ModalProps = {
  modalCard: ListItem[];
  closeModal: () => void;
  List: ListItem[];
};

export default function Modal({ modalCard, closeModal }: ModalProps) {
  return (
    <>
      {modalCard.map((item) => (
        <div key={item.id} className="modal">
          <img
            src={Close}
            alt="botão fechar"
            onClick={closeModal}
            className="btnClose"
          />
          <div className="container">
            <Swiper
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="mainSlide"
            >
              {item.photos.map((item, index) => (
                <SwiperSlide key={index} className="slide">
                  <img src={item} className="imgSlide" />
                </SwiperSlide>
              ))}
            </Swiper>
            <h1 className="name">{item.name}</h1>
            <h3 className="price">{item.price}</h3>
            <h2>Por onde comprar:</h2>
            <div className="btn">
              <a
                href="https://wa.me/5521975272434?text=Ol%C3%A1%2C+tudo+bem%3F+Gostaria+de+um+or%C3%A7amento%21"
                target="_blank"
                className="link"
              >
                <img src={whatsapp} className="img" />
                WhatsApp
              </a>
              <a
                href="https://www.marelarombrelones.com/produtos"
                target="_blank"
                className="link"
              >
                {" "}
                <img src={globe} className="img" /> Site
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
