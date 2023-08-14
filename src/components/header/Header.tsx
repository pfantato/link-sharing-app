"use client";
import "client-only";

import Image from "next/image";
import styles from "./Header.module.scss";
import logoImage from "@public/logo.png";
import { Button } from "../button";
import { Nav } from "../nav";
import { useRouter } from "next/navigation";
import { LogoutButton } from "../logoutButton/LogoutButton";

export const Header = () => {
  const classNames = {
    header: styles.header,
    logo: styles.logo,
    nav: styles.nav,
    preview: styles.preview,
  };

  const router = useRouter();

  return (
    <header className={classNames.header}>
      <div className={classNames.logo}>
        <Image
          alt="Link Sharing App logo"
          src={logoImage.src}
          blurDataURL={logoImage.blurDataURL}
          quality={90}
          width={182}
          height={40}
          priority={true}
        />
      </div>

      <Nav />

      <div className={classNames.preview}>
        <Button onClick={() => router.push("/preview")}>Preview</Button>
        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
