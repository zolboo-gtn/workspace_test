import { c } from "./contract";
import { userContract } from "./user.contract";

export const contracts = c.router({
  user: userContract,
});
