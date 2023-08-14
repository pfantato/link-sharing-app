import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

export default async function seedUserCollection(prisma: PrismaClient) {
  const testUser = await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: {},
    create: {
      email: "test@test.com",
      password: await hash("test1234", 12),
      name: "Test User",
      username: "testuser",
    },
  });

  return {
    testUser,
  };
}
