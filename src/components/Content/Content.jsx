import styles from "./Content.module.css";
import projects from "../../projects";
import Card from "../Card/Card";

export default function Content() {
  return (
    <main className={styles.content}>
      <h1>
        This page has been built as an exercise in adaptive layouts as part of{" "}
        <a href="https://www.theodinproject.com/">The Odin Project</a>{" "}
        curriculum.
      </h1>
      <h2>Below are some examples of my other takes on TOP assignments:</h2>

      <section className={`${styles["content-container"]}`}>
        <div className={`${styles["grid-container"]}`}>
          {projects.map((p) => (
            <Card key={p.id}>{p}</Card>
          ))}
        </div>
      </section>
    </main>
  );
}
