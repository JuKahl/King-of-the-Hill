import styles from "./Header.module.css";
import ProfilePicture from "./HeaderProfile";
import SubNav from "./HeaderSubNav";
import { NavMenuButton } from "./HeaderNavButton";

export type NavHeaderProps = {
  label: string;
  picture: string;
  subNavOne: string;
  subNavTwo: string;
};

export default function NavHeader({
  label,
  picture,
  subNavOne,
  subNavTwo,
}: NavHeaderProps) {
  return (
    <div>
      <section className={`${styles.navHeader}`}>
        <NavMenuButton />
        <h1 className={`${styles.navHeaderLabel}`}>{label}</h1>
        <ProfilePicture picture={picture} />
      </section>
      <SubNav subNavOne={subNavOne} subNavTwo={subNavTwo} />
    </div>
  );
}
