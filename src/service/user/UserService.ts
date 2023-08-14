import type { Prisma, User } from "@prisma/client";

import { compare } from "bcryptjs";

import { type Credentials, HttpStatusCodes, prisma } from "@/lib";
import { BaseService } from "../base";

type FindUniqueArgs = Prisma.UserFindUniqueArgs;
type FindManyArgs = Prisma.UserFindManyArgs;
type CreateArgs = Prisma.UserCreateInput;
type Delegate = Prisma.UserDelegate;

export class UserService extends BaseService<
  Delegate,
  FindUniqueArgs,
  FindManyArgs,
  CreateArgs,
  User
> {
  constructor() {
    super(prisma?.user as Delegate);
  }

  async getByUsername(username: string) {
    const { data: user, ...result } = await this.findUnique({
      where: { username },
    });
    return { user, ...result };
  }

  async authenticate({ email, password }: Credentials) {
    const { data } = await this.findUnique({
      where: { email },
    });

    if (!data || !(await compare(password, data.password))) {
      return null;
    }

    return data;
  }
}
