import styles from "./PlayerInfo.module.css";
import UserPicture from "./PlayerInfoPicture";
import UserPick from "./PlayerInfoPick";

export type PlayerInfoProps = {
  picture: string;
  username: string;
  pick: string;
  pickLogo: string;
  opponent: string;
  opponentLogo: string;
};

export default function PlayerInfoBox({
  picture,
  username,
  pick,
  pickLogo,
  opponent,
  opponentLogo,
}: PlayerInfoProps) {
  return (
    <section className={styles.playerInfoBox}>
      <UserPicture picture={picture} />
      <p className={styles.playerInfoUsername}>{username}</p>
      <UserPick
        pick={pick}
        pickLogo={pickLogo}
        opponent={opponent}
        opponentLogo={opponentLogo}
      />
    </section>
  );
}
