import styles from "./Login.module.css";

export function LoginPassword() {
  return (
    <input
      type="password"
      placeholder="Your Password"
      className={styles.input}
    />
  );
}
