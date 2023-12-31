import type { Metadata } from "next";

import Image from "next/image";

import logoImage from "@public/logo.png";
import styles from "./layout.module.scss";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dashboard | Link Sharing App",
  description: "User's dashboard",
};

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  const classNames = {
    page: styles.page,
    logo: styles.logo,
    form: styles.form,
  };

  return (
    <div className={classNames.page}>
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
      <Suspense fallback={<span>Loading... </span>}>
        <div className={classNames.form}>{children}</div>
      </Suspense>
    </div>
  );
}
