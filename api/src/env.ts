import { z } from "zod";

// Allows type safety of process.env values
const envVariables = z.object({
  PORT: z.string(),
  FOOTBALL_TOKEN: z.string(),
  FOOTBALL_API_URL: z.string(),
  GOOGLE_API_KEY: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}