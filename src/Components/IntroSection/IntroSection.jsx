import Button from "../Buttons/Button";
import styles from "./IntroSection.module.css";
import { Link } from "react-scroll";

export default function IntroSection() {
  return (
    <>
      <section className={styles.introSection}>
        <div className = {styles.textBlock}>
          <h1 className={styles.head}>
            Приветствуем вас!
          </h1>
          <p className={styles.description}>
            На данном сайте Вы можете ознакомиться с общей информацией и документами нашей общественной организации.
          </p>
          <div className={styles.buttons}>
            <Link to="docs" smooth={true}>
              <Button type='fill'>К документам</Button>
            </Link>
            <Link to="contact" smooth={true}>
              <Button type='inline'>Остались вопросы?</Button>
            </Link>
          </div>
        </div>
        <img className={styles.introImg} src="LogoClear.svg" alt="" />
      </section>
    </>
  );
}
