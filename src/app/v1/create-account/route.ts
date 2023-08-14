import "server-only";
import { hash } from "bcryptjs";

import { HttpStatusCodes, sendApiResponse } from "@/lib";
import { UserService } from "@/service";

export type CreateAccountForm = {
  email: string;
  password: string;
};

type CreateAccountRequest = Request & {
  body: CreateAccountForm;
};

const service = new UserService();

export async function POST(req: CreateAccountRequest) {
  const { email, password } = await req.json();

  const hashed_password = await hash(password, 12);

  if (!email || !password)
    return sendApiResponse[HttpStatusCodes.BAD_REQUEST]({
      message: "Missing fields",
    });

  const { data: user } = await service.create({
    email: email.toLocaleLowerCase(),
    password: hashed_password,
  });

  if (!user)
    return sendApiResponse[HttpStatusCodes.UNAUTHORIZED]({
      message: "Invalid credentials",
    });

  return sendApiResponse[HttpStatusCodes.OK](user);
}
