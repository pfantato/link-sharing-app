// PrismaClient is attached to the `global` object in development to prevent
// exhausting the database connection limit.

import { PrismaClient } from "@prisma/client";

export let prisma: PrismaClient | undefined;

if (typeof window === "undefined") {
  if (process.env.NEXT_PUBLIC_APP_ENV === "production" || !global.prisma) {
    prisma = global.prisma ?? new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }

    prisma = global.prisma;
  }
}
