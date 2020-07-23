import { Application, Context, send } from "https://deno.land/x/oak/mod.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";
import "https://deno.land/x/dotenv/mod.ts";
import router from "./routes/routes.ts";

const { args } = Deno;

const DEFAULT_PORT = 5000 | Number(Deno.env.get("PORT"));
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;
const app = new Application();


const logging = async (ctx: Context, next: Function) => {
  const start = Date.now();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`HTTP ${ctx.request.method} on ${ctx.request.url} - ${rt}`);
};

app.use(logging)

app.use(router.routes());
app.use(router.allowedMethods());

console.info(`Server run on port ${port}`);
await app.listen({ port });
