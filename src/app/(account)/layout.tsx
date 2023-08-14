import type { Metadata } from "next";

import Image from "next/image";

import { Instrument_Sans } from "next/font/google";

import logoImage from "@public/logo.png";
import "../globals.scss";
import styles from "./layout.module.scss";
import { Suspense } from "react";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

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
          // blurDataURL={logoImage.blurDataURL}
          quality={90}
          width={182.5}
          height={40}
        />
      </div>
      <Suspense fallback={<span>Loading... </span>}>
        <div className={classNames.form}>{children}</div>
      </Suspense>
    </div>
  );
}
