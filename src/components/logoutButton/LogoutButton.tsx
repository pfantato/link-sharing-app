"use client";

import { signOut } from "next-auth/react";
import { Button } from "../button";

export const LogoutButton = () => (
  <Button onClick={() => signOut()}>Sign out</Button>
);
