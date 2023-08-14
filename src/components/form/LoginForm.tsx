"use client";
import "client-only";

import type { SubmitHandler } from "react-hook-form";
import type { CreateAccountFormSchema } from "@/lib/schemas";

import { signIn } from "next-auth/react";

import { loginSchema, useCsrfToken } from "@/lib";

import { Form, FormInputs } from "./Form";
import { SocialAuth } from "../socialAuth/SocialAuth";
import { useSearchParams } from "next/navigation";

export const LoginForm = () => {
  const csrfToken = useCsrfToken();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/profile";

  const handleCreateAccount: SubmitHandler<CreateAccountFormSchema> = async ({
    email,
    password,
  }) => {
    await signIn("credentials", {
      email,
      password,
      callbackUrl,
    });
  };

  const formInputs: FormInputs = {
    email: {
      type: "email",
      label: "Email address",
      placeholder: "e.g.: alex@example.com",
      required: true,
    },
    password: {
      type: "password",
      label: "Create password",
      placeholder: "At least 8 characters",
      required: true,
    },
    csrfToken: {
      type: "hidden",
      defaultValue: csrfToken,
    },
  };
  return (
    <>
      <Form
        schema={loginSchema}
        inputs={formInputs}
        onSubmit={handleCreateAccount}
        submitButton={{
          label: "Login",
          variant: "primary",
        }}
      />

      <SocialAuth />
    </>
  );
};
