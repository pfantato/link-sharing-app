import { HttpStatusCodes, prisma, sendApiResponse } from "@/lib";

export async function GET() {
  try {
    const platforms = await prisma?.platform.findMany();
    return sendApiResponse[HttpStatusCodes.OK](platforms);
  } catch (exception) {
    console.error("Failed to fetch platforms", exception);
    return sendApiResponse[HttpStatusCodes.INTERNAL_SERVER_ERROR](exception);
  }
}
