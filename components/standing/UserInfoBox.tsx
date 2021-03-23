import styles from "./UserInfo.module.css";
import UserPicture from "./UserInfoPicture";
import UserPick from "./UserInfoPick";

export type UserInfoProps = {
  picture: string;
  username: string;
  pick: string;
  pickLogo: string;
  opponent: string;
  opponentLogo: string;
};

export default function UserInfoBox({
  picture,
  username,
  pick,
  pickLogo,
  opponent,
  opponentLogo,
}: UserInfoProps) {
  return (
    <section className={styles.userInfoBox}>
      <UserPicture picture={picture} />
      <p className={styles.userName}>{username}</p>
      <UserPick
        pick={pick}
        pickLogo={pickLogo}
        opponent={opponent}
        opponentLogo={opponentLogo}
      />
    </section>
  );
}
