import { connectDb, checkProduct } from "../utils/index.ts";
import { Product } from "../constants/types.ts";

export const getProducts = async ({ response }: { response: any }) => {
  try {
    const productObj = connectDb()
    const products = await productObj.find();

    response.status = 200
    response.header = "X-Response-Time"
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

export const getProduct = async ({ params, response }: { params: { id: string }; response: any;}) => {
  try {
    const productObj = connectDb();
    const product = await productObj.findOne({ _id: { $oid: params.id } });
    if (product) {
      response.status = 200
      response.body = {
        success: true,
        data: product
      }
    } else {
      response.status = 404
      response.body = {
        success: false,
        data: "Product requested is not found"
      }
    }
  } catch (error) {
    response.status = 404;
    response.body = {
      success: false,
      data: error.toString()
    }
  }
};

export const addProduct = async ({ response, request }: { response: any; request: any; }) => {
  // TODO: Nu permite adaugarea altui field in product
  const body = request.body();
  const product: Product = await body.value;
  try {
    if (await checkProduct(product).length !== 0) {
  console.log("addProduct", product)

      const message = await checkProduct(product);
        response.status = 400
        response.body = {
          success: false,
          data: message
      }
    } else {
      const productObj = await connectDb();
      await productObj.insertOne(product);

      response.status = 201;
      response.body = {
        success: true,
        data: await product
      }
    }
  } catch (error) {
      response.status = 500;
      response.body = {
        success: false,
        msg: error.toString()
      }
    }
};

export const updateProduct = async ({ params, response, request }: { params: { id: string }; response: any; request: any; }) => {
  const body = request.body();
  const updateProd: Product = await body.value;
  try {
    if (await checkProduct(updateProd).length !== 0) {
      const message = await checkProduct(updateProd);
      response.status = 400
      response.body = {
        success: false,
        data: message
      }
    } else {
      const productObj = connectDb();
      const product = await productObj.updateOne(
        { _id: { $oid: params.id } },
        { $set: updateProd }
      );
      if (product) {
        response.status = 202;
        response.body = {
          success: true,
          data: {
            _id: params.id,
            updateProd
          }
        }
      } else {
        response.status = 404
        response.body = {
        success: false,
          data: "Product requested is not found"
        }
      }
    }
  } catch (error) {
    response.status = 500;
    response.body = {
      success: false,
      msg: error.toString()
    }
  }
}

export const deleteProduct = async ({ params, response, request }: { params: { id: string }; response: any; request: any }) => {
  try {
    const productObj = connectDb();
    const deletedProduct = await productObj.findOne({ _id: { $oid: params.id } }) ;
    await productObj.deleteOne({ _id: { $oid: params.id } });

    if (deletedProduct) {
      response.status = 200
      response.body = {
        success: true,
        data: await deletedProduct
      }
    } else {
      response.status = 404
      response.body = {
        success: false,
        data: "Product requested is not found"
      }
    }
  } catch (error) {
    response.status = 404;
    response.body = {
      success: false,
      data: error.toString()
    }
  }
};
