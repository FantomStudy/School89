import "./Header.css";
import { useState } from "react";
import Button from "../Buttons/Button";
import { Link } from "react-scroll";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <header className="header" id="home">
        <ul
          className={`headerNav ${isOpen ? "active" : ""}`}
          onClick={() => setOpen(false)}
        >
          <li>
            <a href="/">
              <img className="headerLogo" src="LogoClear.svg" alt=""/>
            </a>
          </li>
          <Link to="home" smooth={true}>
            <li onClick={() => setOpen(false)}>Главная</li>
          </Link>
          <Link to="docs" smooth={true}>
            <li onClick={() => setOpen(false)}>Основные документы</li>
          </Link>
          <Link to="qr" smooth={true}>
            <li onClick={() => setOpen(false)}>Другое</li>
          </Link>
          <Link to="contact" smooth={true}>
            <li onClick={() => setOpen(false)}>Контакты</li>
          </Link>
          <div className="mobileAuthBtn">
            <a href="">Log in</a>
            <Button type="fill">Join us</Button>
          </div>
        </ul>

        {/* <div className="headerRight">
          <a href="/registration">Log in</a>
          <Button type="fill">Join us</Button>
        </div> */}

        <button
          className={`burgerBtn ${isOpen ? "active" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    </>
  );
}
