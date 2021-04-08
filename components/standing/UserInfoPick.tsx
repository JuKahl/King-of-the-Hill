import React from "react";
import styles from "./UserInfo.module.css";

export type Pick = {
  pick: string;
  opponent: string;
};

export default function UserPick({ pick, opponent }: Pick) {
  return (
    <div className={styles.userPick}>
      <p className={styles.pick}>{pick}</p>
      <p className={styles.opponent}>vs. {opponent}</p>
    </div>
  );
}
