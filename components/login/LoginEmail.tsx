import styles from "./Login.module.css";

export function LoginEmail() {
  return (
    <input type="email" placeholder="Your Email" className={styles.input} />
  );
}
