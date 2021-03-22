import styles from "./Header.module.css";

export type Profile = {
  picture: string;
};

export default function ProfilePicture({ picture }: Profile) {
  return <img className={`${styles.navProfile}`} src={picture} />;
}
