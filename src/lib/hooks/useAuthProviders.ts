'use client';
import 'client-only';

import { getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

export const useAuthProviders = () => {
  const [providers, setProviders] = useState<any>(undefined);

  useEffect(() => {
    if (!providers) {
      (async () => {
        const _providers = await getProviders();
        setProviders(_providers);
      })();
    }
  }, [providers]);

  return providers;
};
