import Link from "next/link";
import styles from "./Header.module.css";

export function NavMenuButton() {
  return (
    <button className={styles.btn}>
      <img src="/icons/menu.svg" />
    </button>
  );
}

export function NavBackButton() {
  return (
    <Link href={"/yourleagues"}>
      <button className={styles.btn}>
        <img src="/icons/back.svg" />
      </button>
    </Link>
  );
}
