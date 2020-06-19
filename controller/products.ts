import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const client = new MongoClient();

//@desc Get all products
//@route Get /api/v2/products

const getProducts = async ({ response }: { response: any }) => {
  try {
    await client.connectWithUri(config().DATA_BASE);
    const db = client.database("myShop");
    const productObj = db.collection("products");
    const products = await productObj.find();

    response.status = 200
    response.body = {
      success: true,
      data: products
    }
  } catch (error) {
    response.status = 404;
    response.body = {
      success: false,
      data: error.toString()
    }
  }
};

//@desc Get single products
//@route Get /api/v2/products/:id

const getProduct = async ({ params, response }: { params: { id: string }; response: any; }) => {
  try {
    await client.connectWithUri(config().DATA_BASE);
    const db = client.database("myShop");
    const productObj = db.collection("products");
    const product = await productObj.findOne({ _id: { $oid: params.id } });

    response.status = 200
    response.body = {
      success: true,
      data: product
    }
  } catch (error) {
    response.status = 404;
    response.body = {
      success: false,
      data: error.toString()
    }
  }
};

//@desc Adds a product
//@route POST /api/v2/products

const addProduct = async ({ response, request }: { response: any; request: any; }) => {
  const body = await request.body();

  const product = body.value;

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      data: "No data provided",
    };
  } else {
    try {
      await client.connectWithUri(config().DATA_BASE);
      const db = client.database("myShop");
      const productObj = db.collection("products");
      await productObj.insertOne({ product });

      response.status = 201;
      response.body = {
        success: true,
        data: product
      }
    } catch (error) {
      response.status = 500;
      response.body = {
        success: false,
        msg: error.toString()
      }
    };
  }
};

//@desc update single product
//@route put /api/v2/products/:id

const updateProduct = async ({ params, response, request }: { params: { id: string }; response: any; request: any; }) => {
  // Make update product
  const prod = await getProduct({ params: { id: params.id }, response });
  console.log(response)
}

//@desc delete single product
//@route delete /api/v2/products/:id

const deleteProduct = async ({ params, response }: { params: { id: string }; response: any }) => {
  try {
    await client.connectWithUri(config().DATA_BASE);
    const db = client.database("myShop");
    const productObj = db.collection("products");
    const product = await productObj.deleteOne({ _id: { $oid: params.id } });

    response.status = 200
    response.body = {
      success: true,
      data: product
    }
  } catch (error) {
    response.status = 404;
    response.body = {
      success: false,
      data: error.toString()
    }
  }
};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };    
