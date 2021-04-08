import styles from "./MatchBox.module.css";
import { useUser } from "@auth0/nextjs-auth0";

export type Teams = {
  home: string;
  away: string;
  handlePick: any;
  matchId: number;
  matchday: number;
};

export default function TeamNames({
  home,
  away,
  handlePick,
  matchId,
  matchday,
}: Teams) {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <p className={styles.teamNames}>
      <span
        onClick={() =>
          handlePick({
            pick: "HOME_TEAM",
            matchId: matchId,
            clientId: user.email,
            matchday: matchday,
            pickTeam: home,
            opponentTeam: away,
            nextRd: "yes",
          })
        }
      >
        {home}
      </span>{" "}
      vs.{" "}
      <span
        onClick={() =>
          handlePick({
            pick: "AWAY_TEAM",
            matchId: matchId,
            clientId: user.email,
            matchday: matchday,
            pickTeam: away,
            opponentTeam: home,
            nextRd: "yes",
          })
        }
      >
        {away}
      </span>
    </p>
  );
}
