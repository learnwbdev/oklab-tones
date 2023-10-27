import { FooterLInks } from "../..";
import styles from "./Footer.module.css";

const Footer = () => {
  const author = "Alex Par";

  return (
    <footer className={styles.footer}>
      <FooterLInks />
      <div className={styles.author}>
        <p>
          &copy; {new Date().getFullYear()} {author}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
