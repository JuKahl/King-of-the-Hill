import styles from "./MatchBox.module.css";

export type Teams = {
  home: string;
  away: string;
};

export default function TeamNames({ home, away }: Teams) {
  return (
    <p className={styles.teamnames}>
      {home} vs. {away}
    </p>
  );
}
