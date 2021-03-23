import styles from "./NewLeague.module.css";

export default function JoinLeague() {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Name of the league</label>
      <input
        type="text"
        placeholder="Type name here"
        className={styles.input}
      />
      <button className={styles.submitBtn}>Submit</button>
    </div>
  );
}
