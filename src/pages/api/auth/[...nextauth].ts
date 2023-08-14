import type { PrismaClient } from "@prisma/client";
import type { AuthOptions, Session, User } from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import TwitchProvider from "next-auth/providers/twitch";
import CredentialsProvider from "next-auth/providers/credentials";

import { prisma } from "@/lib";
import { JWT } from "next-auth/jwt";

export const authOptions = {
  adapter: PrismaAdapter(prisma as PrismaClient),
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: `${process.env.GITHUB_CLIENT_ID}`,
      clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
    }),
    TwitchProvider({
      clientId: `${process.env.TWITCH_CLIENT_ID}`,
      clientSecret: `${process.env.TWITCH_CLIENT_SECRET}`,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { data: user } = await fetch("/v1/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }).then((res) => res.json());
        if (user) return user;
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/create-account",
    signOut: "/logout",
    verifyRequest: "/verify-request", // (used for check email message)
  },
  callbacks: {
    session: ({ session, token }: { session: Session; token: JWT }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt({ token, user }: { token: JWT; user: User }): JWT {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
        };
      }
      return token;
    },
  },
};

export default NextAuth(authOptions as AuthOptions);
