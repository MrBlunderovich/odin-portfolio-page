import styles from "./Card.module.css";
/** @typedef {import('../projects.js').Projects} Projects */

export default function Card({ children }) {
  const { title, screenshot: imageUrl, description } = children;
  return (
    <article className={styles.card}>
      <h2>{title}</h2>
      <img src={imageUrl} alt="app screenshot" width="100%" />
      <p className="description">{description}</p>
    </article>
  );
}
