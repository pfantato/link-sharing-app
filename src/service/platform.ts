import { prisma } from "@/lib";
import type { Platform } from "@prisma/client";

export const getPlatform = async (
  platformId: string
): Promise<Platform | null | undefined> => {
  try {
    const platform = await prisma?.platform.findUnique({
      where: { id: platformId },
    });

    return platform;
  } catch (e) {
    console.error(e);
  }

  return null;
};
