import styles from "./Sidebar.module.css";
export default function footer() {
  return (
    <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
      </footer>

  );
}