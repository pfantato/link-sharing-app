import { prisma } from "@/lib";
import { Platform, Prisma } from "@prisma/client";
import { BaseService } from "../base";

type FindUniqueArgs = Prisma.PlatformFindUniqueArgs;
type FindManyArgs = Prisma.PlatformFindManyArgs;
type CreateArgs = Prisma.PlatformCreateInput;
type Delegate = Prisma.PlatformDelegate;

export class PlatformService extends BaseService<
  Delegate,
  FindUniqueArgs,
  FindManyArgs,
  CreateArgs,
  Platform
> {
  constructor() {
    super(prisma?.platform as Delegate);
  }

  async getByIdentifier(identifier: string) {
    const { data: platform, ...result } = await this.findUnique({
      where: { identifier },
    });
    return { platform, ...result };
  }
}
