import {} from "react";
import styles from "./Card.module.css";

export default function Card({ children }) {
  const { title, screenshot: imageUrl } = children;
  return (
    <article className={styles.card}>
      <h2>{title}</h2>
      <img src={imageUrl} alt="app screenshot" width="100%" />
    </article>
  );
}
