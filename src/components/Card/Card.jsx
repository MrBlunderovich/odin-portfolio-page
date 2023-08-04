import GitHubIcon from "../UI/GitHubIcon";
import OpenInNewIcon from "../UI/OpenInNewIcon";
import styles from "./Card.module.css";

/** @typedef {import('../projects.js').Projects} Projects */

export default function Card({ children }) {
  const {
    title,
    screenshot: imageUrl,
    description,
    source,
    deployment,
  } = children;
  return (
    <article className={styles.card}>
      <div className={`${styles["heading-container"]}`}>
        <h2>{title}</h2>
        <a href={source} aria-label="github source code">
          <GitHubIcon className={styles.icon} />
        </a>
        <a href={deployment} aria-label="live deployment">
          <OpenInNewIcon className={styles.icon} />
        </a>
      </div>
      <img src={imageUrl} alt="app screenshot" width="100%" />
      <p className="description">{description}</p>
    </article>
  );
}
