import styles from "./DocSection.module.css";
import { Link } from "react-scroll";

export default function DocSection() {
  return (
    <>
      <section className={styles.docSection} id="docs">
        {/* ЛИБО https://pdftosvg.com/  */}
        <img
          className={styles.docImg}
          src="06_05_2024_Свидетельство_о_гос_регистрации_НО-1.svg"
          alt=""
        />
        <div className={styles.textBlock}>
          <h1 className={styles.head}>Данный документ</h1>
          <p className={styles.description}>
            подтверждает, что организация зарегистрирована в налоговом органе по
            ее юридическому адресу.
          </p>
          <Link to="nextDoc" smooth={true}>
            <p className={styles.greenText}>
              Далее <img src="arrowInfo.svg" alt="" />
            </p>
          </Link>
        </div>
      </section>

      <section className={styles.docSection} id="nextDoc">
        <div className={styles.textBlock}>
          <h1 className={styles.head}>Данное свидетельство</h1>
          <p className={styles.description}>
            подтверждает факт создания организации и её регистрации в
            государственном реестре.
          </p>
          <Link to="qr" smooth={true}>
            <p className={styles.greenText}>
              Далее
              <img src="arrowInfo.svg" alt="" />
            </p>
          </Link>
        </div>
        <img
          className={styles.docImg}
          src="08_05_2024_Свидетельство_о_гос_рег_и_ОМОО_Союз_родителей_СОШ_89-1.svg"
          alt=""
        />
      </section>
    </>
  );
}
