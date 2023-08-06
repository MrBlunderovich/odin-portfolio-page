import styles from "./Footer.module.css";
import katzenPic from "../../assets/musik-katzen.jpg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles["footer-container"]}`}>
        <div className={`${styles["address-container"]}`}>
          <h2>Contact me (not yet)</h2>
          <address>
            <span>
              <span className="material-icons-outlined">phone</span>{" "}
              555-555-5555
            </span>
            <span>
              <span className="material-icons-outlined">email</span>{" "}
              mail@email.com
            </span>
          </address>
        </div>
        <img src={katzenPic} alt="cats playing music" />
      </div>
    </footer>
  );
}
