import { Router } from "https://deno.land/x/oak/mod.ts";
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct } from "../controller/products.ts";

const router = new Router();

router
  .get("/api/v2/products", getProducts)
  .get("/api/v2/products/:id", getProduct)
  .post("/api/v2/products", addProduct)
  .put("/api/v2/products/:id", updateProduct)
  .delete("/api/v2/products/:id", deleteProduct);

export default router;
