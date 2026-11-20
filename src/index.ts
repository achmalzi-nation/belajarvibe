import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { config } from "./config/env";
import { userRoutes } from "./routes/users";

const app = new Elysia()
  .use(staticPlugin({
    assets: "public",
    prefix: "/"
  }))
  .get("/health", () => ({ status: "ok", timestamp: new Date().toISOString() }))
  .use(userRoutes)
  .listen(config.port);

console.log(`⭐ Stardust Crusaders RPG is running at http://localhost:${config.port}`);

export type App = typeof app;
