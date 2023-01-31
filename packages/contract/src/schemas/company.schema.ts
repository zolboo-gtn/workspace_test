import { z } from "zod";

export const Company = z.object({
  bs: z.string(),
  catchPhrase: z.string(),
  name: z.string(),
});
export type Company = z.infer<typeof Company>;
