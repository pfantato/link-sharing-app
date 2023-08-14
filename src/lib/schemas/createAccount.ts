import z from "zod";

const errorMap = (issue: any, context: any) => {
  const defaultErrorMessage = issue.message ?? "Please check again";

  if (!context.data || context.data.length === 0) {
    return { message: "Can't be empty" };
  }

  return {
    message: defaultErrorMessage,
  };
};

export const createAccountSchema = z.object({
  email: z
    .string({
      errorMap,
    })
    .min(1, "Can't be empty")
    .email("Please enter a valid email address"),
  password: z
    .string({
      errorMap,
    })
    .min(8, "Password must be at least 8 characters long"),
});

export const createAccountFormSchema = z
  .intersection(
    createAccountSchema,
    z.object({
      confirmPassword: z
        .string({
          errorMap,
        })
        .min(8),
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type CreateAccountSchema = z.infer<typeof createAccountSchema>;
export type CreateAccountFormSchema = z.infer<typeof createAccountFormSchema>;

export default createAccountSchema;
