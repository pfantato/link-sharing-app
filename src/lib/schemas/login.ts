import z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type Credentials = z.infer<typeof loginSchema>;

export default loginSchema;
