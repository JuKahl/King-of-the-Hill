import styles from "./Standing.module.css";
import UserPicture from "./StandingUserPicture";
import UserPick from "./StandingPick";

export type StandingProps = {
  picture: string;
  username: string;
  pick: string;
  pickLogo: string;
  opponent: string;
  opponentLogo: string;
};

export default function StandingBox({
  picture,
  username,
  pick,
  pickLogo,
  opponent,
  opponentLogo,
}: StandingProps) {
  return (
    <section className={`${styles.standingBox}`}>
      <UserPicture picture={picture} />
      <p className={`${styles.standingUsername}`}>{username}</p>
      <UserPick
        pick={pick}
        pickLogo={pickLogo}
        opponent={opponent}
        opponentLogo={opponentLogo}
      />
    </section>
  );
}
