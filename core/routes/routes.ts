import { Router } from "https://deno.land/x/oak@v6.0.0/mod.ts";
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct } from "../controller/products.ts";
import { oakCors } from 'https://deno.land/x/cors/mod.ts';

// TODO: Test cors for validation fields

const router = new Router();

const configCors = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

router
  .get("/api", oakCors(), (ctx) => {
    ctx.render("../static/index.ejs");
  }) // ? Working
  .get("/api/v2/products", oakCors(configCors), getProducts) // ? Working
  .get("/api/v2/product/:id", oakCors(configCors), getProduct) // ? Working
  .post("/api/v2/product", oakCors(configCors), addProduct) // ? Working
  .put("/api/v2/product/:id", oakCors(configCors), updateProduct) // ? Working
  .delete("/api/v2/product/:id", oakCors(configCors), deleteProduct) // ? Working
  
export default router;
