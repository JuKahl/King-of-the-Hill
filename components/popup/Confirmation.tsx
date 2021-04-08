import styles from "./Confirmation.module.css";

export type PickConfirmationProps = {
  userPick: string;
};

export function PickConfirmation({ userPick }: PickConfirmationProps) {
  return (
    <div className={styles.container}>
      <p>Do you really want to pick {userPick} ?</p>
      <button className={styles.buttonYes}>Yes</button>
      <button className={styles.buttonNo}>No</button>
    </div>
  );
}
