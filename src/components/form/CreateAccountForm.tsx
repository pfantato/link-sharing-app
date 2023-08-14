"use client";
import "client-only";

import type { CreateAccountFormSchema } from "@/lib/schemas";

import { SubmitHandler } from "react-hook-form";

import { HttpStatusCodes, createAccountFormSchema, useCsrfToken } from "@/lib";

import { SocialAuth } from "../socialAuth";

import { Form, FormInputs } from "./Form";
import { useRouter } from "next/navigation";

export const CreateAccountForm = () => {
  const csrfToken = useCsrfToken();
  const router = useRouter();

  const handleCreateAccount: SubmitHandler<CreateAccountFormSchema> = async ({
    email,
    password,
  }) => {
    const response = await fetch("/v1/create-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());

    if (response.status === HttpStatusCodes.OK) {
      router.push("/dashboard");
    }
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
    confirmPassword: {
      type: "password",
      label: "Confirm password",
      placeholder: "••••••••",
      required: true,
    },
  };

  return (
    <>
      <Form
        schema={createAccountFormSchema}
        inputs={formInputs}
        onSubmit={handleCreateAccount}
        submitButton={{
          label: "Create new account",
          variant: "primary",
        }}
      />

      <SocialAuth />
    </>
  );
};
