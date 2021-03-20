import styles from "./Standing.module.css";

export type User = {
  picture: string;
};

export default function UserPicture({ picture }: User) {
  return <img className={`${styles.userPicture}`} src={picture} />;
}
