import "./style.scss";
import Logo from "../../assets/logo.png";
import Instagram from "../../assets/instagram.svg"
import Facebook from "../../assets/facebook.svg"
import Wpp from "../../assets/whatsapp.svg"

export default function Footer() {
  return (
    <footer>
      <div className="footer01">
        <div className="logoFooter">
          <img src={Logo} alt="logo" />
          <p>&copy; 2023 - Mar e Lar Ombrelones</p>
          <p>All Rights Preserved</p>
        </div>
        <div className="icons">
            <a href="https://www.instagram.com/marelarombrelones/" target="_blank"><img src={Instagram} alt="instagram" /></a>
            <a href="https://www.facebook.com/profile.php?id=100088855785481" target="_blank"><img src={Facebook} alt="facebook" /></a>
            <a href="https://wa.me/5521975272434?text=Ol%C3%A1%2C+tudo+bem%3F+Gostaria+de+um+or%C3%A7amento%21" target="_blank"><img src={Wpp} alt="WhatsApp" /></a>
        </div>
      </div>
      <div className="footer2">
        <p>&copy; Igor Vinicius</p>
      </div>
    </footer>
  );
}
