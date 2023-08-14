import { prisma } from "@/lib";

import type { CreateAccountSchema } from "@/lib";
import { compare } from "bcryptjs";

export const getProfileByUsername = async (username: string) => {
  const profile = await prisma?.user.findUnique({
    where: { username },
  });

  return profile;
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await prisma?.user.findUnique({
    where: { email },
  });

  if (!user || !(await compare(password, user.password))) {
    return undefined;
  }

  return user;
};

export const createAccount = async ({
  email,
  password,
}: CreateAccountSchema) => {
  const user = await prisma?.user.create({
    data: {
      email,
      password,
    },
  });

  return user;
};
