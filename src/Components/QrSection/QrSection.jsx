import styles from "./QrSection.module.css";
import { Link } from "react-scroll";
import { Accordion, AccordionTab } from "primereact/accordion";
import { useState } from "react";
import CopyableField from "../CopyField/CopyField";

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
            Отсканируйте QR - код или скопируйте реквизиты, чтобы сделать свой
            вклад!
          </p>
        </div>
        <img src="qr.svg" className={styles.qr} alt="" />
        <Link to="requisites" smooth={true}>
          <p className={styles.nextBlock}>
            К реквизитам!
            <img src="arrowInfo.svg" alt="" />
          </p>
        </Link>
        <div className={styles.requisites} id="requisites">
          <CopyableField
            head="Счет получателя платежа"
            text="40703810629250000238"
          />
          <CopyableField head="ИНН" text="5610252819" />
          <CopyableField head="БИК" text="042202824" />
          <CopyableField head="К/С" text="30101810200000000824" />
          <CopyableField
            head="Банк получателя"
            text='ФИЛИАЛ "НИЖЕГОРОДСКИЙ" АО "АЛЬФА-БАНК"'
          />
          <CopyableField
            head="Наименование организации"
            text='ОРЕНБ.МОО "СОЮЗ РОДИТЕЛЕЙ МУНИЦ.ОБЩЕОБ.АУ "СОШ №89, ИМ.ГЕРОЯ РФ, ЛЕТЧИКА-КОСМОН.А.Н.ОВЧИНИНА" Г.ОРЕНБУРГ'
          />
          <CopyableField head="КПП" text="561001001" />
          <Link to="accordion" smooth={true}>
            <p
              onClick={() => setActiveIndex(0)}
              className={styles.nextBlock}
            >
              Далее
              <img src="arrowInfo.svg" alt="" />
            </p>
          </Link>
        </div>
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
