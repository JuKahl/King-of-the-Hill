import React from "react";
import styles from "./PlayerInfo.module.css";

export type Pick = {
  pick: string;
  pickLogo: string;
  opponent: string;
  opponentLogo: string;
};

export default function UserPick({
  pick,
  pickLogo,
  opponent,
  opponentLogo,
}: Pick) {
  return (
    <div className={styles.playerInfoPick}>
      <div className={styles.pick}>
        {pick}
        <img className={styles.pickLogo} src={pickLogo} />
      </div>
      <p className={styles.opponent}>
        {opponent}
        <img className={styles.opponentLogo} src={opponentLogo} />
      </p>
    </div>
  );
}
