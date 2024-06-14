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
              <a href="tel:+7(3532)43-06-61">(3532)43-06-61</a>
              <img className="iconFoot" src="tel.svg" alt="" />
            </li>
            <li>
              <a href="mailto:89@orenschool.ru">89@orenschool.ru</a>
              <img className="iconFoot" src="mail.svg" alt="" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
