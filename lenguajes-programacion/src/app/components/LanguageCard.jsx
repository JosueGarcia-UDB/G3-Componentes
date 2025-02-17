import { useState } from "react";
import Modal from "./Modal";
import styles from "../page.module.css";

export default function LanguageCard({ language }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.card}>
      <img src={language.image} alt={language.name} className={styles.image} />
      <h2 className={styles.title}>{language.name}</h2>
      <button className={styles.button} onClick={() => setIsOpen(true)}>
        Ver más
      </button>
      {isOpen && <Modal language={language} onClose={() => setIsOpen(false)} />}
    </div>
  );
}