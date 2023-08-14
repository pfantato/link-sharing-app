import type { Metadata } from "next";
// import type { Session } from "next-auth";

// import { AuthOptions, getServerSession } from "next-auth";

import { Header } from "@/components";

// import { DashboardProvider } from "@/lib";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const metadata: Metadata = {
  title: "Dashboard | Link Sharing App",
  description: "User's dashboard",
};

type DashboardLayoutProps = React.PropsWithChildren;

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  // const session = await getServerSession(authOptions as AuthOptions);
  return (
    // <DashboardProvider session={session as Session}>
    <div>
      <Header />
      {children}
    </div>
    // </DashboardProvider>
  );
}
