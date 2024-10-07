import { Elysia } from "elysia";
import { auth } from "./modules/auth/controllers";

const app = new Elysia({
  prefix: "/api",
  detail: {
    tags: ["api"],
  },
})
.use(auth)
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
