import { Router } from "https://deno.land/x/oak/mod.ts";
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct, apiInformation } from "../controller/products.ts";

const router = new Router();

router
  .get("/api", apiInformation) // ? Working
  .get("/api/v2/products", getProducts) // ? Working
  .get("/api/v2/products/:id", getProduct) // ? Working
  .post("/api/v2/products", addProduct) // ? Working
  .put("/api/v2/products/:id", updateProduct) // ? Working
  .delete("/api/v2/products/:id", deleteProduct) // ? Working
  
export default router;
