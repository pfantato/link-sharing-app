"use client";
import "client-only";

import { useState } from "react";
import { User } from "@prisma/client";

import { createSafeContext } from "../utils";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export type DashboardView = "links" | "profile" | "preview";

export const [useDashboard, DashboardContextProvider] = createSafeContext<{
  view: DashboardView;
  setView: (view: DashboardView) => void;
  user: User | null;
  setUser: (user: User | null) => void;
}>();

type DashboardProviderProps = React.PropsWithChildren<{ session: Session }>;

export const DashboardProvider = ({
  children,
  session,
}: DashboardProviderProps) => {
  const [view, setView] = useState<DashboardView>("links");
  const [user, setUser] = useState<User | null>(null);

  return (
    <DashboardContextProvider value={{ view, setView, user, setUser }}>
      <SessionProvider session={session}>{children}</SessionProvider>
    </DashboardContextProvider>
  );
};

export default DashboardProvider;
