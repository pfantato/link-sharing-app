import "server-only";

import { HttpStatusCodes, sendApiResponse } from "@/lib";
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

  if (!email || !password)
    return sendApiResponse[HttpStatusCodes.BAD_REQUEST]({
      message: "Missing fields",
    });

  const user = await login({ email, password });

  if (!user)
    return sendApiResponse[HttpStatusCodes.UNAUTHORIZED]({
      message: "Invalid credentials",
    });

  return sendApiResponse[HttpStatusCodes.OK](user);
}
