import { HttpStatusCodes, prisma, sendApiResponse } from "@/lib";
import {PlatformService} from "@/service";

const service = new PlatformService();

export async function GET() {
  try {
    const {data: platforms, status } = await service.findAll();
    return sendApiResponse[HttpStatusCodes.OK](platforms);
  } catch (exception) {
    console.error("Failed to fetch platforms", exception);
    return sendApiResponse[HttpStatusCodes.INTERNAL_SERVER_ERROR](exception);
  }
}
