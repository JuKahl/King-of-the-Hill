import styles from "./Header.module.css";

export function NavMenuButton() {
  return (
    <button className={styles.menuBtn}>
      <img src="/icons/menu.svg" />
    </button>
  );
}

export function NavBackButton() {
  return (
    <button className={styles.backBtn}>
      <img src="/icons/back.svg" />
    </button>
  );
}
