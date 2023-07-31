import Close from "../../assets/close.svg";
import "./style.scss";
import whatsapp from "../../assets/whatsapp-logo.svg";
import globe from "../../assets/globe.svg";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "swiper/scss/autoplay";
import { useState, useEffect } from "react";


SwiperCore.use([Navigation, Pagination, Autoplay]);

type ListItem = {
  id: string;
  name: string;
  alt: string;
  description: string[];
  price: string;
  photos: string[];
  link: string;
};

type ModalProps = {
  modalCard: ListItem[];
  closeModal: () => void;
  List: ListItem[];
};

export default function Modal({ modalCard, closeModal }: ModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

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
              navigation={!isMobile}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop
              spaceBetween={30}
              slidesPerView={1}
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
              <a href={item.link} target="_blank" className="link">
                {" "}
                <img src={globe} className="img" /> Site
              </a>
            </div>
            <details>
              <summary>Descrição do Produto</summary>
              {item.description.map((item, index) => (
                <p key={index}>- {item}</p>
              ))}
            </details>
          </div>
        </div>
      ))}
    </>
  );
}
