"use client";
import "client-only";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const useIsAuthenticated = (redirectIfUnauthorized = false) => {
  const router = useRouter();
  const { status } = useSession();

  if (status !== "authenticated" && redirectIfUnauthorized) {
    return router.push("/login");
  }

  return status === "authenticated";
};
