import "server-only";

import {
  Credentials,
  HttpStatusCodes,
  loginSchema,
  sendApiResponse,
} from "@/lib";
import { UserService } from "@/service";

type LoginRequest = Request & {
  body: Credentials;
};

const service = new UserService();

export async function POST(req: LoginRequest) {
  const { email, password } = await req.json();

  const validate = loginSchema.safeParse({ email, password });

  if (!validate.success)
    return sendApiResponse[HttpStatusCodes.BAD_REQUEST]({
      message: "Invalid email or password",
    });

  const user = await service.authenticate({ email, password });

  if (!user)
    return sendApiResponse[HttpStatusCodes.UNAUTHORIZED]({
      message: "Unauthorized",
    });

  return sendApiResponse[HttpStatusCodes.OK](user);
}
