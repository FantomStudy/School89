import "./Footer.css";
import {Link} from "react-scroll";
import Button from "../Buttons/Button.jsx";

export default function Footer() {
  return (
    <>
      <footer className="footer" id="contact">
        <div className="navigate">
          <h1>Навигация</h1>
          <ul>
            <Link to="home" smooth={true}>
              <li>Главная</li>
            </Link>
            <Link to="docs" smooth={true}>
              <li>Документы</li>
            </Link>
            <Link to="qr" smooth={true}>
              <li>Другое</li>
            </Link>
            <Link to="contact" smooth={true}>
              <li>Контакты</li>
            </Link>
          </ul>
        </div>
        <div className="contact">
          <h1>Контакты</h1>
          <ul>
            <li>
              <a href="tel:+79877955477">+7(9877)95-54-77</a>
              <img className="iconFoot" src="tel.svg" alt="" />
            </li>
            <li>
              <a href="mailto:omoo_89@mail.ru">omoo_89@mail.ru</a>
              <img className="iconFoot" src="mail.svg" alt="" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
