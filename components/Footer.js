import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright 2021</p>
      <p>
        Built by{" "}
        <a href="https://www.cyberdojo.co" target="_blank">
          Cyber Dojo
        </a>
      </p>
    </footer>
  );
}
