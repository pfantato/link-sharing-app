"use client";
import "client-only";

import type { Platform } from "@prisma/client";

import { signIn } from "next-auth/react";
import useSWR from "swr";

import { useAuthProviders } from "@/lib";

import { PlatformButton } from "../platformButton";

import styles from "./SocialAuth.module.scss";
import { Suspense, useEffect } from "react";

const fetchFn = async (url: string, options: RequestInit) => {
  const res = await fetch(url, options);
  return res.json();
};

export const SocialAuth = () => {
  const providers = useAuthProviders();

  const classNames = {
    wrapper: styles.wrapper,
  };

  const {
    data: platforms,
    isLoading,
    error,
  } = useSWR("/api/v1/platforms", fetchFn, {
    revalidateOnFocus: false,
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={classNames.wrapper}>
        {!isLoading &&
          platforms &&
          providers &&
          Object.values<any>(providers).map((provider) => {
            const platform = platforms?.find(
              (platform: Platform) => platform.identifier === provider.id
            );

            if (!platform) return null;

            return (
              <PlatformButton
                key={`social-login-${provider.id}`}
                link={{
                  id: provider.id,
                  url: provider.signinUrl,
                  label: `Sign in with ${provider.name}`,
                  onClick: () => signIn(provider.id),
                  platform,
                }}
              />
            );
          })}
      </div>
    </Suspense>
  );
};
