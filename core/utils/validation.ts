import { Product } from "../constants/types.ts";

export const checkProduct = (product: Product) => {
  const message:any = [];
  if (product) {
    for (const field in product) {
      console.log()
      // if (!field) {
      // console.log(field)

      //   message.push({
      //     field: "Is missing"
      //   })
      // }
    }
    return message;
  }  
}
