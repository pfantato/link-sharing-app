import "server-only";

import { HttpStatusCodes, loginSchema, sendApiResponse } from "@/lib";
import { login } from "@/service";

export type LoginForm = {
  email: string;
  password: string;
};

type LoginRequest = Request & {
  body: LoginForm;
};

export async function POST(req: LoginRequest) {
  const { email, password } = await req.json();

  const validate = loginSchema.safeParse({ email, password });

  if (!validate.success)
    return sendApiResponse[HttpStatusCodes.BAD_REQUEST]({
      message: "Invalid email or password",
    });

  const user = await login({ email, password });

  if (!user)
    return sendApiResponse[HttpStatusCodes.UNAUTHORIZED]({
      message: "Unauthorized",
    });

  return sendApiResponse[HttpStatusCodes.OK](user);
}
