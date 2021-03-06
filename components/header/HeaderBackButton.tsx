import styles from "./Header.module.css";
import ProfilePicture from "./HeaderProfile";
import SubNav from "./HeaderSubNav";
import { NavBackButton } from "./HeaderNavButton";

export type NavHeaderProps = {
  label: string;
  picture: string;
  subNavOne: string;
  subNavTwo: string;
  linkOne: string;
  linkTwo: string;
};

export default function NavHeaderBack({
  label,
  picture,
  subNavOne,
  subNavTwo,
  linkOne,
  linkTwo,
}: NavHeaderProps) {
  return (
    <div>
      <section className={`${styles.navHeader}`}>
        <NavBackButton />
        <h1 className={`${styles.navHeaderLabel}`}>{label}</h1>
        <ProfilePicture picture={picture} />
      </section>
      <SubNav
        subNavOne={subNavOne}
        subNavTwo={subNavTwo}
        linkOne={linkOne}
        linkTwo={linkTwo}
      />
    </div>
  );
}
