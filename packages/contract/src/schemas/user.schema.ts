import { z } from "zod";

//
import { Address } from "./address.schema";
import { Company } from "./company.schema";

export const User = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  website: z.string(),
  address: Address,
  company: Company,
});
export type User = z.infer<typeof User>;
