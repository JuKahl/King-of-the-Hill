import styles from "./PlayerInfo.module.css";

export type User = {
  picture: string;
};

export default function UserPicture({ picture }: User) {
  return <img className={styles.playerInfoPicture} src={picture} />;
}
