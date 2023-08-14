import type { PrismaClient } from "@prisma/client";
import type { AuthOptions, Session, User } from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import TwitchProvider from "next-auth/providers/twitch";
import CredentialsProvider from "next-auth/providers/credentials";

import { prisma } from "@/lib";
import { JWT } from "next-auth/jwt";
import { UserService } from "@/service";

export const authOptions = {
  adapter: PrismaAdapter(prisma as PrismaClient),
  secret: process.env.NEXTAUTH_SECRET,
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
        const service = new UserService();
        const { email, password } = credentials || {};

        if (!email || !password) return null;

        const user = await service.authenticate({
          email,
          password,
        });

        if (!user) return null;

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
  callbacks: {
    session: ({ session, token }: { session: Session; token: JWT }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
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
} as AuthOptions;
