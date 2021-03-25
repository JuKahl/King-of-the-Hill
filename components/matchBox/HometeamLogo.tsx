import styles from "./MatchBox.module.css";

export type Logo = {
  logo: string;
};

export default function HomeTeamLogo({ logo }: Logo) {
  return <img className={styles.hometeamLogo} src={logo} />;
}
