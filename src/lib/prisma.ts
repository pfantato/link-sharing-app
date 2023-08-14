// PrismaClient is attached to the `global` object in development to prevent
// exhausting the database connection limit.

import { PrismaClient } from "@prisma/client";

export let prisma: PrismaClient | undefined;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }

    prisma = global.prisma;
  }
}

export default prisma;
