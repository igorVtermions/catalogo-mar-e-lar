import Close from "../../assets/close.svg";
import "./style.scss";
import { register } from "swiper/element";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
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
            pagination={{clickable: true}}
            navigation
            autoplay={{ delay: 3000 }}
            loop={true}
            speed={1000}
            >
             {item.photos.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ))}
    </>
  );
}
