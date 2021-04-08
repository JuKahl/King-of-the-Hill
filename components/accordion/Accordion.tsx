import React, { useState } from "react";
import styles from "./Accordion.module.css";

export type AccordionProps = {
  title: string;
  content: any; // This type needs to be adapted!
};

export default function Accordion({ title, content }: AccordionProps) {
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
