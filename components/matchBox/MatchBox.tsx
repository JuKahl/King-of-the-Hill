import { MouseEventHandler } from "react";
import styles from "./MatchBox.module.css";
// import HometeamLogo from "./HometeamLogo";
// import AwayteamLogo from "./AwayteamLogo";
import Teamnames from "./TeamNames";

export type MatchBoxProps = {
  // hometeamLogo: string;
  homeTeam: { name: string };
  // awayteamLogo: string;
  awayTeam: { name: string };
  handlePick: MouseEventHandler;
  matchId: number;
};

export default function MatchBox({
  // hometeamLogo,
  homeTeam,
  awayTeam,
  handlePick,
  matchId,
}: // awayteamLogo,
MatchBoxProps) {
  return (
    <div className={styles.matchBox}>
      <p className={styles.teamNames}>
        {/* <HometeamLogo logo={hometeamLogo} /> */}
        <Teamnames
          home={homeTeam.name}
          away={awayTeam.name}
          handlePick={handlePick}
          matchId={matchId}
        />
        {/* <AwayteamLogo logo={awayteamLogo} /> */}
      </p>
    </div>
  );
}
