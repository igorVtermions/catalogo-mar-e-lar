import "./style.scss"

type ListItem = {
  id: string;
  name: string;
  alt: string;
  description: string;
  price: string;
  photo1: string;
};

type ModalProps = {
  modalCard: ListItem[];
  closeModal: () => void;
  List: ListItem[];
};

export default function Modal ({ modalCard, closeModal}: ModalProps){
    return(
        <div>
            {modalCard.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
            
        </div>
      ))}
        </div>
    )
}