import styles from "./UserInfo.module.css";
import UserPicture from "./UserInfoPicture";
import UserPick from "./UserInfoPick";

export type UserInfoProps = {
  picture: string;
  username: string;
  pick: string;
  opponent: string;
};

export default function UserInfoBox({
  picture,
  username,
  pick,
  opponent,
}: UserInfoProps) {
  return (
    <section className={styles.userInfoBox}>
      <UserPicture picture={picture} />
      <p className={styles.userName}>{username}</p>
      <UserPick pick={pick} opponent={opponent} />
    </section>
  );
}
