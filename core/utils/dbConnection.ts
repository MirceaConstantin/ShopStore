import { MongoClient } from "https://deno.land/x/mongo/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Product } from "../constants/types.ts";

const client = new MongoClient();

export const connectDb = () => {
  client.connectWithUri(config().DATA_BASE);
  const db = client.database("myShop");
  return db.collection<Product>("products");
}
