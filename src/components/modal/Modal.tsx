import "./style.scss"

export default function Modal ({modalCard, closeModal }){
    return(
        <div>
            {modalCard.map((item) => (
        <div key={item.id}>
          <button className="menubtn" onClick={closeModal}><ion-icon name="close-outline"></ion-icon></button>
          <div className="cardModal">
          <img src={item.image} alt={item.name} />
          <div className="content">
            <h2>{item.name}</h2>
            <p className="price">{item.price}</p>
            <p className="cardCredit">12x no cartão.</p>

              <div>
                  {item.sizes.map((item)=> (<button key={item.sizes} 
                  className="btnSizes">{item}</button>))}
              </div>
            <div className="btn">
              <ion-icon name="heart-outline" id="heart"></ion-icon>
              <div className="btnCart">
                  <button className="btnTrade" id="cartBtn">Carrinho</button>
              <button className="btnTrade" id="moneyBtn">Comprar</button>
              </div>
            </div>
            <div className="delivery">
            <img src="https://cdn.discordapp.com/attachments/1037425403985399841/1040329813900140684/truck.png" className="imgDeli" />
            <p className="textDelivery">Frete gratis para Suldeste e Nordeste !!</p>
            </div>
            </div>
        </div>
        </div>
      ))}
        </div>
    )
}