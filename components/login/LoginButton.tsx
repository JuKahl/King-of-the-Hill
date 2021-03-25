import styles from "./Login.module.css";

export function LoginButton() {
  return (
    <button className={styles.loginButton}>
      <img src="/icons/login.svg" />
    </button>
  );
}
