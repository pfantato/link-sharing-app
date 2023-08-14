// "use client";

import type { Metadata } from "next";
import type { Session } from "next-auth";

import { Instrument_Sans } from "next/font/google";

import { Header } from "@/components";

import { DashboardProvider } from "@/lib";

import "./globals.scss";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard | Link Sharing App",
  description: "User's dashboard",
};

type DashboardLayoutProps = React.PropsWithChildren<{
  session: Session;
}>;

export default function DashboardLayout({
  children,
  session,
}: DashboardLayoutProps) {
  return (
    <DashboardProvider session={session}>
      <Header />
      {children}
    </DashboardProvider>
  );
}
