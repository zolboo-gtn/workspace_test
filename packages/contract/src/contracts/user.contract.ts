//
import { User } from "../schemas";

//
import { c } from "./contract";

export const userContract = c.router({
  getUsers: {
    method: "GET",
    path: "/users",
    responses: {
      200: User.array(),
    },
  },
  getUser: {
    method: "GET",
    path: "/users/:id",
    responses: {
      200: User,
    },
  },
});
