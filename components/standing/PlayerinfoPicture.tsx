import styles from "./Playerinfo.module.css";

export type User = {
  picture: string;
};

export default function UserPicture({ picture }: User) {
  return <img className={`${styles.playerinfoPicture}`} src={picture} />;
}
