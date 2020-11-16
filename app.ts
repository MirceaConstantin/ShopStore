import { Application, Context, send } from "https://deno.land/x/oak@v6.0.0/mod.ts";
import {viewEngine,engineFactory,
  adapterFactory} from "https://deno.land/x/view_engine/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import router from "./core/routes/routes.ts";

const port = Number(config().PORT);
const app = new Application();

const ejsEngine = await engineFactory.getEjsEngine();
const oakAdapter = await adapterFactory.getOakAdapter();

const logging = async (ctx: Context, next: Function) => {
  const start = Date.now();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.info(`HTTP ${ctx.request.method} on ${ctx.request.url} - ${rt}`);
};

app.use(viewEngine(oakAdapter, ejsEngine));
app.use(logging)
app.use(router.routes());
app.use(router.allowedMethods());

console.info(`Server run on port ${port}`);
await app.listen({ port });
