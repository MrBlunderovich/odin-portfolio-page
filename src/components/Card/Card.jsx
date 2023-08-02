import {} from "react";
import styles from "./Card.module.css";

export default function Card({ children }) {
  const { title } = children;
  return (
    <article className={styles.card}>
      <h2>{title}</h2>
    </article>
  );
}
