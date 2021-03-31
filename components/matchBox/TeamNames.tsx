import { MouseEventHandler, useState } from "react";
import styles from "./MatchBox.module.css";

export type Teams = {
  home: string;
  away: string;
  handlePick: any;
  matchId: number;
};

export default function TeamNames({ home, away, handlePick, matchId }: Teams) {
  return (
    <p className={styles.teamNames}>
      <span onClick={() => handlePick({ team: "HOME_TEAM", matchId: matchId })}>
        {home}
      </span>{" "}
      vs.{" "}
      <span onClick={() => handlePick({ team: "AWAY_TEAM", matchId: matchId })}>
        {away}
      </span>
    </p>
  );
}
