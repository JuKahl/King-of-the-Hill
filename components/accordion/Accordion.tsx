import React, { useState } from "react";
import styles from "./Accordion.module.css";

export type Content = {
  title: string;
  content: string;
};

export default function Accordion({ title, content }: Content) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <div
        className={styles.accordionTitle}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
}
