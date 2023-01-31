import { z } from "zod";

export const Address = z.object({
  city: z.string(),
  geo: z.object({
    lat: z.string(),
    lng: z.string(),
  }),
  street: z.string(),
  suite: z.string(),
  zipcode: z.string(),
});
export type Address = z.infer<typeof Address>;
