import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright 2021</p>
      <p>
        Built by{" "}
        <a href="https://www.stevenraywatson.com" target="_blank">
          SW Web Design
        </a>
      </p>
    </footer>
  );
}
