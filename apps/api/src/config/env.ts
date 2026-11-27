import { z } from "zod/v4";

const envSchema = z.object({
  PORT: z.coerce.number(),
  HOST: z.string(),
});

export const env = envSchema.parse(process.env);
