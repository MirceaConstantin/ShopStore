import { Application } from "https://deno.land/x/oak/mod.ts";
import "https://deno.land/x/dotenv/mod.ts";

import router from "./routes/routes.ts";

const port = 5000 | Number(Deno.env.get("PORT"));
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.info(`Server run on port ${port}`);
await app.listen({ port });
