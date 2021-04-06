import Head from "next/head";
import styles from "../styles/Home.module.css";
import router from "next/router";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setTimeout(() => router.push("/login"), 3000);
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>King of the Hill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>King of the Hill</h1>
        <img className={styles.logo} src="/KingOfTheHill.png" alt="Logo" />
      </main>
    </div>
  );
}
