import { MouseEventHandler } from "react";
import styles from "./MatchBox.module.css";
import Teamnames from "./TeamNames";

export type MatchBoxProps = {
  homeTeam: { name: string };
  awayTeam: { name: string };
  handlePick: MouseEventHandler;
  matchId: number;
  matchday: number;
};

export default function MatchBox({
  homeTeam,
  awayTeam,
  handlePick,
  matchId,
  matchday,
}: MatchBoxProps) {
  return (
    <div className={styles.matchBox}>
      <p className={styles.teamNames}>
        <Teamnames
          home={homeTeam.name}
          away={awayTeam.name}
          handlePick={handlePick}
          matchId={matchId}
          matchday={matchday}
        />
      </p>
    </div>
  );
}
