import styles from "./QrSection.module.css";
import {Link} from "react-scroll";

export default function QrSection() {
  return (
    <>
      <section className={styles.emailSection} id='qr'>
        <div className={styles.textBlock}>
          <p className={styles.greenText}>QR  - code</p>
          <h1 className={styles.head}>Оплата членских взносов</h1>
          <p className={styles.description} >
            Отсканируйте QR - код, чтобы узнать больше о членстве и сделать свой вклад!
          </p>
        </div>
        <img src="qr.svg" className={styles.qr} alt=""/>
        <Link to='contact' smooth={true}>
          <a href="#" className={styles.nextBlock}>
            Далее
            <img src="arrowInfo.svg" alt="" />
          </a>
        </Link>
      </section>
    </>
  );
}
