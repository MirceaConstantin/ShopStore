import { Application, Context } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import router from "./core/routes/routes.ts";

const port = Number(config().PORT);
const app = new Application();

const logging = async (ctx: Context, next: Function) => {
  const start = Date.now();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.info(`HTTP ${ctx.request.method} on ${ctx.request.url} - ${rt}`);
};

app.use(logging)

app.use(router.routes());
app.use(router.allowedMethods());

console.info(`Server run on port ${port}`);
await app.listen({ port });
