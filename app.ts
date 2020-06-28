import { Application } from "https://deno.land/x/oak/mod.ts";
import "https://deno.land/x/dotenv/mod.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";

import router from "./routes/routes.ts";

const { args } = Deno;

const DEFAULT_PORT = 5000 | Number(Deno.env.get("PORT"));
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.info(`Server run on port ${port}`);
await app.listen({ port });
