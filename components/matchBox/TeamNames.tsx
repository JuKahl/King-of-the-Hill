import styles from "./MatchBox.module.css";
import { useUser } from "@auth0/nextjs-auth0";

export type Teams = {
  home: string;
  away: string;
  handlePick: any;
  matchId: number;
};

export default function TeamNames({ home, away, handlePick, matchId }: Teams) {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <p className={styles.teamNames}>
      <span
        onClick={() =>
          handlePick({
            team: "HOME_TEAM",
            matchId: matchId,
            clientId: user.email,
          })
        }
      >
        {home}
      </span>{" "}
      vs.{" "}
      <span
        onClick={() =>
          handlePick({
            team: "AWAY_TEAM",
            matchId: matchId,
            clientId: user.email,
          })
        }
      >
        {away}
      </span>
    </p>
  );
}
