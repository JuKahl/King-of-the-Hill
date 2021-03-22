import styles from "./Playerinfo.module.css";
import UserPicture from "./PlayerinfoPicture";
import UserPick from "./PlayerinfoPick";

export type PlayerinfoProps = {
  picture: string;
  username: string;
  pick: string;
  pickLogo: string;
  opponent: string;
  opponentLogo: string;
};

export default function PlayerinfoBox({
  picture,
  username,
  pick,
  pickLogo,
  opponent,
  opponentLogo,
}: PlayerinfoProps) {
  return (
    <section className={`${styles.playerinfoBox}`}>
      <UserPicture picture={picture} />
      <p className={`${styles.playerinfoUsername}`}>{username}</p>
      <UserPick
        pick={pick}
        pickLogo={pickLogo}
        opponent={opponent}
        opponentLogo={opponentLogo}
      />
    </section>
  );
}
