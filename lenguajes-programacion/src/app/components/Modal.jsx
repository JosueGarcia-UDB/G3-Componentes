import styles from "../page.module.css";

export default function Modal({ language, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className={styles.description}>{language.description}</p>
        <button className={styles.button_cerrar} onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
