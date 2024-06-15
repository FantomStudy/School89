import React, { useState } from "react";
import styles from "./CopyField.module.css";

function CopyField({ head, text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 5000); // Сбросить состояние через 2 секунды
      })
      .catch((err) => {
        console.error("Ошибка копирования:", err);
      });
  };

  return (
    <>
      <form onClick={handleCopy} className={styles.copyForm}>
        <div className={styles.left}>
          <p>{head}</p>
          <input
            type="text"
            value={text}
            readOnly
            className={styles.copyText}
          />
        </div>
        <img src={copied ? "Check_Big.svg" : "Copy.svg" } alt="" />
      </form>
    </>
  );
}

export default CopyField;
