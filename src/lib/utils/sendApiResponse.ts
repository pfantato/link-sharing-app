import type { ZodError } from "zod";

import { NextResponse } from "next/server";

import { HttpStatusCodes } from "../enums";

export const sendApiResponse = {
  [HttpStatusCodes.BAD_REQUEST]: (error: any) => {
    return NextResponse.json(
      {
        error,
      },
      { status: HttpStatusCodes.BAD_REQUEST }
    );
  },
  [HttpStatusCodes.CREATED]: (data: any) => {
    return NextResponse.json({ data }, { status: HttpStatusCodes.CREATED });
  },
  [HttpStatusCodes.INTERNAL_SERVER_ERROR]: (error: any) => {
    return NextResponse.json(
      {
        error,
      },
      { status: HttpStatusCodes.INTERNAL_SERVER_ERROR }
    );
  },
  [HttpStatusCodes.OK]: (data: any) => {
    return NextResponse.json({ data }, { status: HttpStatusCodes.OK });
  },
  [HttpStatusCodes.UNAUTHORIZED]: (error: any) => {
    return NextResponse.json(
      {
        error,
      },
      { status: HttpStatusCodes.UNAUTHORIZED }
    );
  },
};

export default sendApiResponse;
