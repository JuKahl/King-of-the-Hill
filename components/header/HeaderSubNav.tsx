import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

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
  return (
    <section className={styles.subNav}>
      <Link href={linkOne}>
        <button className={styles.navOne}>{subNavOne}</button>
      </Link>
      <Link href={linkTwo}>
        <button className={styles.navTwo}>{subNavTwo}</button>
      </Link>
    </section>
  );
}
