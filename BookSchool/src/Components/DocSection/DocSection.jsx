import styles from "./DocSection.module.css";
import {Link} from "react-scroll";


export default function DocSection() {

  return (
    <>
      <section className={styles.docSection} id="docs">
        {/* ЛИБО https://pdftosvg.com/  */}
        <img className={styles.docImg} src="06_05_2024_Свидетельство_о_гос_регистрации_НО-1.svg" alt=""/>
        <div className={styles.textBlock}>
          <h1 className={styles.head}>Approdable docs</h1>
          <p className={styles.description}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <Link to='nextDoc' smooth={true}>
            <a href="#" className={styles.greenText}>
              Далее <img src="arrowInfo.svg" alt=""/>
            </a>
          </Link>
        </div>
      </section>

      <section className={styles.docSection} id='nextDoc'>
        <div className={styles.textBlock}>
          <h1 className={styles.head}>Approdable doks</h1>
          <p className={styles.description}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <Link to='qr' smooth={true}>
            <a href="#" className={styles.greenText}>
              Далее
              <img src="arrowInfo.svg" alt="" />
            </a>
          </Link>
        </div>
        <img className={styles.docImg} src="08_05_2024_Свидетельство_о_гос_рег_и_ОМОО_Союз_родителей_СОШ_89-1.svg" alt="" />
      </section>
    </>
  );
}
