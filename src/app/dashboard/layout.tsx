// "use client";

import type { Metadata } from "next";
import { AuthOptions, getServerSession, type Session } from "next-auth";

import { Instrument_Sans } from "next/font/google";

import { Header } from "@/components";

import { DashboardProvider } from "@/lib";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard | Link Sharing App",
  description: "User's dashboard",
};

type DashboardLayoutProps = React.PropsWithChildren;

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await getServerSession(authOptions as AuthOptions);
  return (
    <DashboardProvider session={session as Session}>
      <Header />
      {children}
    </DashboardProvider>
  );
}
