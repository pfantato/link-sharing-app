import { NavLink } from "./NavLink";

import styles from "./Nav.module.scss";
export const Nav = () => {
  const navLinks = [
    {
      icon: "link",
      label: "Links",
      href: "/links",
    },
    {
      icon: "profile",
      label: "Profile details",
      href: "/profile",
    },
  ];

  return (
    <nav className={styles.nav}>
      {navLinks.map((link) => {
        return <NavLink key={`main-nav-${link.icon}`} {...link} />;
      })}
    </nav>
  );
};
