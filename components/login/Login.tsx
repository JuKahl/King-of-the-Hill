import styles from "./Login.module.css";
import { LoginButton } from "./LoginButton";
import { LoginEmail } from "./LoginEmail";
import { LoginPassword } from "./LoginPassword";

export default function Login() {
  return (
    <div className={styles.login}>
      <label htmlFor="button">login</label>
      <LoginButton />
      <LoginEmail />
      <LoginPassword />
    </div>
  );
}
