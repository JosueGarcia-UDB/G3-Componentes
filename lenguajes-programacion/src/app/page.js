"use client";
import { useState, useEffect } from "react";
import LanguageGrid from "./components/LanguageGrid";
import styles from "./page.module.css";

export default function Home() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch("/lenguages.json")
      .then((res) => res.json())
      .then((data) => setLanguages(data));
  }, []);

  return (
    <main className={styles.container}>
      <h1>Lenguajes de Programación</h1>
      <LanguageGrid languages={languages} />
    </main>
  );
}