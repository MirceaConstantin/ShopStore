import productObj from "../db/mongo.ts";

// const home = ({ response }: { response: any }) => {
//   response.body =
//     "Hello to Products REST API\n GET: '/api/v1/products' returns all products in database \n GET: '/api/v1/products/:id' returns single product for given param id \n POST 'api/v1/products' adds new product in the database \n PUT: '/api/v1/products/:id' updates an existing product \n DELETE '/api/v1/products/:id' deletes a product in database for given param id";
// };

//Move the connection to DB here

//@desc Get all products
//@route Get /api/v1/products

const getProducts = async ({ response }: { response: any }) => {
  const products = await productObj.find();

  if (products) {
      response.status = 200
      response.body = {
        success: true,
        data: products,
      };
  } else {
    response.status = 404;
    response.body = {
        success: false,
        data: "No product found"
    }
  }
};

//@desc Get single products
//@route Get /api/v1/products/:id

const getProduct = async ({ params, response,}: { params: { id: string }; response: any; }) => {
  const product = await productObj.findOne({ _id: { $oid: params.id } });

  if (product) {
    response.status = 200
    response.body = {
      success: true,
      data: product,
    };
  } else {
    response.status = 
    response.body = {
      success: false,
      data: "No product found for given ID",
    };
  }
};

//@desc Adds a product
//@route POST /api/v1/products

const addProduct = async ({ response, request }: { response: any; request: any; }) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      data: "No data provided",
    };
  } else {
    const product = body.value;
    await productObj.insertOne({
      product,
    });
    response.status = 201;
    response.body = {
      success: true,
      data: "Product added to products database",
    };
  }
};

//@desc update single product
//@route put /api/v1/products/:id

const updateProduct = async ({ params, response, request }: { params: { id: string }; response: any; request: any; }) => {
  const body = await request.body();
  const product = await productObj.updateOne(
    { _id: { $oid: params.id } },
    {
      $set: {
        product: {
          pizza: body.value.pizzas,
          price: body.value.price,
        },
      },
    }
  );

  if (product.modifiedCount === 1) {
    response.body = {
      success: true,
      data: "Update Product!",
    };
  } else {
    response.body = {
      success: false,
      data: "No product found for given ID",
    };
  }
};

//@desc delete single product
//@route delete /api/v1/products/:id

const deleteProduct = async ({ params, response }: { params: { id: string }; response: any }) => {
  const product = await productObj.deleteOne({ _id: { $oid: params.id } });

  if (product === 1) {
    response.body = {
      success: true,
      data: "Product Deleted",
    };
  } else {
    response.body = {
      success: false,
      data: "No product found for given ID",
    };
  }
};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };