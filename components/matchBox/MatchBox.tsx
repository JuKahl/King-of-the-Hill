import styles from "./MatchBox.module.css";
// import HometeamLogo from "./HometeamLogo";
// import AwayteamLogo from "./AwayteamLogo";
import Teamnames from "./TeamNames";

export type MatchBoxProps = {
  // hometeamLogo: string;
  hometeam: string;
  // awayteamLogo: string;
  awayteam: string;
};

export default function MatchBox({
  // hometeamLogo,
  hometeam,
  awayteam,
}: // awayteamLogo,
MatchBoxProps) {
  return (
    <div className={`${styles.matchBox}`}>
      <p className={`${styles.teamnames}`}>
        {/* <HometeamLogo logo={hometeamLogo} /> */}
        <Teamnames home={hometeam} away={awayteam} />
        {/* <AwayteamLogo logo={awayteamLogo} /> */}
      </p>
    </div>
  );
}
