import Link from "next/link";
import styles from "./YourLeagues.module.css";
import YourPick from "./YourPick";

export type YourPickProps = {
  pick: string;
  opponent: string;
};

export default function YourLeagues({ pick, opponent }: YourPickProps) {
  return (
    <section>
      <YourPick pick={pick} opponent={opponent} />
      <Link href={"/standing"}>
        <button className={styles.btn}>Details</button>
      </Link>
    </section>
  );
}
