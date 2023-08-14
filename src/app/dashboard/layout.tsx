import type { Metadata } from "next";
// import type { Session } from "next-auth";

// import { AuthOptions, getServerSession } from "next-auth";

import { Header } from "@/components";

// import { DashboardProvider } from "@/lib";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

import styles from "./layout.module.scss";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Dashboard | Link Sharing App",
  description: "User's dashboard",
};

type DashboardLayoutProps = React.PropsWithChildren<{
  controls?: React.ReactNode;
  preview?: boolean;
}>;

export default async function DashboardLayout({
  children,
  controls,
  preview,
}: DashboardLayoutProps) {
  const classNames = {
    page: styles.page,
    content: styles.content,
    preview: clsx(styles.preview, styles.pane),
    controls: clsx(styles.controls, styles.pane),
  };
  return (
    <div className={classNames.page}>
      <Header />
      <div className={classNames.content}>
        <div className={classNames.preview}>{preview}</div>
        <div className={classNames.controls}>{controls}</div>
      </div>
    </div>
  );
}
