import "./style.scss";
import { register } from "swiper/element";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from "swiper/react";
register();

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

type ModalProps = {
  modalCard: ListItem[];
  closeModal: () => void;
  List: ListItem[];
};

export default function Modal({ modalCard, closeModal }: ModalProps) {
  return (
    <div>
      {modalCard.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <Swiper>
            <SwiperSlide>
              <img src={item.photo1} alt={item.alt} />
            </SwiperSlide>
          </Swiper>
        </div>
      ))}
    </div>
  );
}
