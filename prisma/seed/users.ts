import { PrismaClient } from "@prisma/client";

export default async function seedUserCollection(prisma: PrismaClient) {
  const testUser = await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: {},
    create: {
      email: "test@test.com",
      password: "test",
      name: "Test User",
      username: "testuser",
    },
  });

  return {
    testUser,
  };
}
