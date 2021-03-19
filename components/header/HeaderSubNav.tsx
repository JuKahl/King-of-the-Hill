import React from "react";
import styles from "./Header.module.css";

export type Navigation = {
  subNavOne: string;
  subNavTwo: string;
};

export default function SubNav({ subNavOne, subNavTwo }: Navigation) {
  return (
    <section className={styles.subNav}>
      <button
        className={styles.navOne}
        onClick={() => console.log("left button: clicked")}
      >
        {subNavOne}
      </button>
      <button
        className={styles.navTwo}
        onClick={() => console.log("right button: clicked")}
      >
        {subNavTwo}
      </button>
    </section>
  );
}
