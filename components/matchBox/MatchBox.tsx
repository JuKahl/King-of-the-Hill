import styles from "./MatchBox.module.css";
// import HometeamLogo from "./HometeamLogo";
// import AwayteamLogo from "./AwayteamLogo";
import Teamnames from "./TeamNames";

export type MatchBoxProps = {
  // hometeamLogo: string;
  homeTeam: string;
  // awayteamLogo: string;
  awayTeam: string;
};

export default function MatchBox({
  // hometeamLogo,
  homeTeam,
  awayTeam,
}: // awayteamLogo,
MatchBoxProps) {
  return (
    <div className={styles.matchBox}>
      <p className={styles.teamNames}>
        {/* <HometeamLogo logo={hometeamLogo} /> */}
        <Teamnames home={homeTeam} away={awayTeam} />
        {/* <AwayteamLogo logo={awayteamLogo} /> */}
      </p>
    </div>
  );
}
