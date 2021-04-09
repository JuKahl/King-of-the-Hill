import styles from "./YourLeagues.module.css";

export type YourPickProps = {
  pick: string;
  opponent: string;
};

export default function YourPick({ pick, opponent }: YourPickProps) {
  return (
    <section className={styles.yourPickContainer}>
      <p className={styles.label}>Your pick</p>
      <div className={styles.pickContainer}>
        <p className={styles.pick}>{pick}</p>
        <p className={styles.opponent}>vs. {opponent}</p>
      </div>
    </section>
  );
}
