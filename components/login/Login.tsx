import Link from "next/link";
import styles from "./Login.module.css";

export default function LoginForm() {
  return (
    <Link href="/api/auth/login">
      <a className={styles.login}>Login</a>
    </Link>
  );
}
