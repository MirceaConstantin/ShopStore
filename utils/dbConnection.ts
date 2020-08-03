import { MongoClient } from "https://deno.land/x/mongo@v0.9.1/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const client = new MongoClient();

export const connectDb = async () => {
  await client.connectWithUri(config().DATA_BASE);
  const db = client.database("myShop");
  return db.collection("products");
}
