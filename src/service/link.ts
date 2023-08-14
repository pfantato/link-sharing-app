import { prisma } from "@/lib";

export const getLink = async (id: string) => {
  try {
    const link = await prisma?.link.findUnique({
      where: { id },
      include: { platform: true },
    });

    return link;
  } catch (e) {
    console.error(e);
  }

  return null;
};
