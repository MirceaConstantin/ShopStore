import { connectDb, checkProduct } from "../utils/index.ts";
import { Product } from "../interface/types.ts";

export const apiInformation = async ({ response }: { response: any }) => {
  try {
    response.status = 200;
    response.body = "content";
  } catch (error) {
    response.status = 500;
    response.body = {
      success: false,
      data: error.toString(),
    };
  }
};

export const getProducts = async ({ response }: { response: any }) => {
  try {
    const productObj = await connectDb()
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

export const getProduct = async ({ params, response }: { params: { id: string }; response: any; }) => {
  try {
    const productObj = await connectDb();
    const product = await productObj.findOne({ _id: { $oid: params.id } }) ;

    if (response.status === 200) {
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
  //TODO: Sent a 400 status if the product don't match with the interface
  const body = request.body();
  const product: Product = await body.value;
  if (!request.hasBody || !product) {
    response.status = 400;
    response.body = {
      success: false,
      data: "No data provided",
    };
  } else {
    try {
      if (await checkProduct(product).length !== 0) {
        const message = await checkProduct(product);
          response.status = 400
          response.body = {
            success: false,
            data: message
        }
      } else {
        const productObj = await connectDb();
        productObj.insertOne(product);
  
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
    };
  }
};

export const updateProduct = async ({ params, response, request }: { params: { id: string }; response: any; request: any; }) => {
  const body = request.body();
  const updateProd: Product = await body.value;

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      data: "No data provided",
    };
  } else {
    try {
      const productObj = await connectDb();
      await productObj.updateOne(
        { _id: { $oid: params.id } },
        { $set: updateProd }
      );
      response.status = 202;
      response.body = {
        success: true,
        data: {
          _id: params.id,
          updateProd
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
}

export const deleteProduct = async ({ params, response, request }: { params: { id: string }; response: any; request: any }) => {
  try {
    const productObj = await connectDb();
    const deletedProduct = await productObj.findOne({ _id: { $oid: params.id } }) ;
    await productObj.deleteOne({ _id: { $oid: params.id } });

    response.status = 200
    response.body = {
      success: true,
      data: await deletedProduct
    }
  } catch (error) {
    response.status = 404;
    response.body = {
      success: false,
      data: error.toString()
    }
  }
};
