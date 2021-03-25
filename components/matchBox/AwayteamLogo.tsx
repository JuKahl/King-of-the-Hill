import styles from "./MatchBox.module.css";

export type Logo = {
  logo: string;
};

export default function AwayTeamLogo({ logo }: Logo) {
  return <img className={styles.awayteamLogo} src={logo} />;
}
