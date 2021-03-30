import styles from "./MatchBox.module.css";
// import HometeamLogo from "./HometeamLogo";
// import AwayteamLogo from "./AwayteamLogo";
import Teamnames from "./TeamNames";

export type MatchBoxProps = {
  // hometeamLogo: string;
  homeTeam: { name: string };
  // awayteamLogo: string;
  awayTeam: { name: string };
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
        <Teamnames home={homeTeam.name} away={awayTeam.name} />
        {/* <AwayteamLogo logo={awayteamLogo} /> */}
      </p>
    </div>
  );
}
