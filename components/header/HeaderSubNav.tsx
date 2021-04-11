import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export type Navigation = {
  subNavOne: string;
  subNavTwo: string;
  linkOne: string;
  linkTwo: string;
};

export default function SubNav({
  subNavOne,
  subNavTwo,
  linkOne,
  linkTwo,
}: Navigation) {
  const router = useRouter();

  return (
    <section className={styles.subNav}>
      <div
        className={
          router.pathname == `${linkOne}` ? styles.active : styles.inactive
        }
      >
        <Link href={linkOne}>
          <button className={styles.navOne}>{subNavOne}</button>
        </Link>
      </div>
      <div
        className={
          router.pathname == `${linkTwo}` ? styles.active : styles.inactive
        }
      >
        <Link href={linkTwo}>
          <button className={styles.navTwo}>{subNavTwo}</button>
        </Link>
      </div>
    </section>
  );
}
