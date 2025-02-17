import LanguageCard from "./LanguageCard";
import styles from "../page.module.css";

export default function LanguageGrid({ languages }) {
  return (
    <div className={styles.grid}>
      {languages.map((lang) => (
        <LanguageCard key={lang.name} language={lang} />
      ))}
    </div>
  );
}
