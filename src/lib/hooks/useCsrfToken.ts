"use client";
import "client-only";

import { getCsrfToken } from "next-auth/react";
import { useEffect, useState } from "react";

export const useCsrfToken = () => {
  const [csrfToken, setCsrfToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!csrfToken) {
      (async () => {
        const token = await getCsrfToken();
        setCsrfToken(token);
      })();
    }
  }, [csrfToken]);

  return csrfToken;
};
