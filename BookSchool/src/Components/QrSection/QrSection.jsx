import styles from "./QrSection.module.css";
import { Link } from "react-scroll";
import { Accordion, AccordionTab } from "primereact/accordion";
import { useState } from "react";

const docs = [
  {
    id: 1,
    path: "05_04_2024г_Устав_союзродителей_СОШ89.pdf",
  },
  {
    id: 2,
    path: "06.05.2024Лист записи в ЕРГЮЛ.pdf",
  },
  {
    id: 3,
    path: "ul-1245600004132-20240515124442.pdf",
  },
];

export default function QrSection() {
  const [activeIndex, setActiveIndex] = useState();

  return (
    <>
      <section className={styles.qrSection} id="qr">
        <div className={styles.textBlock}>
          <p className={styles.greenText}>QR - code</p>
          <h1 className={styles.head}>Оплата членских взносов</h1>
          <p className={styles.description}>
            Отсканируйте QR - код, чтобы узнать больше о членстве и сделать свой
            вклад!
          </p>
        </div>
        <img src="qr.svg" className={styles.qr} alt="" />
        <Link to="accordion" smooth={true}>
          <a
            href="#"
            onClick={() => setActiveIndex(0)}
            className={styles.nextBlock}
          >
            Далее
            <img src="arrowInfo.svg" alt="" />
          </a>
        </Link>
      </section>
      <Accordion
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      >
        <AccordionTab id="accordion" header="Остальные документы">
          {docs.map((doc) => (
            <a key={doc.id} className="pdfRow" href={doc.path} target="_blank">
              <img src="pdf.svg" />
              <p>{doc.path}</p>
            </a>
          ))}
        </AccordionTab>
      </Accordion>
    </>
  );
}
