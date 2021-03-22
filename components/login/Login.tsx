import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.login}>
      <p>
        login
        <button className={styles.loginButton}>
          <img src="/icons/login.svg" />
        </button>
      </p>
      <input type="email" placeholder="Your Email" className={styles.input} />
      <input
        type="password"
        placeholder="Your Password"
        className={styles.input}
      />
    </div>
  );
}
