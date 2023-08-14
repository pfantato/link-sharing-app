"use client";

import { signOut } from "next-auth/react";
import { Button } from "../button";

export const LogoutButton = () => (
  <Button
    variant="secondary"
    onClick={() =>
      signOut({
        callbackUrl: "/login",
        redirect: true,
      })
    }
  >
    Sign out
  </Button>
);
