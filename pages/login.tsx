import Head from "next/head";
import LoginForm from "../components/login/Login";
import styles from "../styles/Login.module.css";

export default function Login() {
  return (
    <div>
      <Head>
        <title>King of the Hill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LoginForm />
      </main>
    </div>
  );
}
