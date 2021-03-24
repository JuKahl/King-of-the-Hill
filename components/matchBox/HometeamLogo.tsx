import styles from "./MatchBox.module.css";

export type Logo = {
  logo: string;
};

export default function HometeamLogo({ logo }: Logo) {
  return <img className={styles.hometeamLogo} src={logo} />;
}
