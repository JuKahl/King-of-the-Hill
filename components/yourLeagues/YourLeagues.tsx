import styles from "./YourLeagues.module.css";

export type YourLeaguesProps = {
  pick: string;
  opponent: string;
};

export default function YourLeagues({ pick, opponent }: YourLeaguesProps) {
  return (
    <section className={styles.yourLeaguesContainer}>
      <p className={styles.label}>Your pick</p>
      <div className={styles.pickContainer}>
        <p className={styles.pick}>{pick}</p>
        <p className={styles.opponent}>vs. {opponent}</p>
      </div>
    </section>
  );
}
