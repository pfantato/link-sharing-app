import { PrismaClient } from "@prisma/client";

import seedPlatformCollection from "./platforms";
import seedUserCollection from "./users";

const prisma = new PrismaClient();

async function main() {
  const platforms = await seedPlatformCollection(prisma);

  const users = await seedUserCollection(prisma);

  console.log({ platforms, users });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
