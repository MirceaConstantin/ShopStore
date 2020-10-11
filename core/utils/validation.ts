export const checkProduct = (product: any) => {
  const message:any = [];
  if (product) {
    if (!product.imagesSlider || product.imagesSlider.length === 0) {
      message.push({
        slider: "Images for slider are missing! Please add one or more for the product."
      });
    }
    if (!product.genre || product.genre.length === 0) {
      message.push({
        genre: "Genre is missing! Please add one or more for the product."
      });
    }
    if (!product.platform || product.platform.length === 0) {
      message.push({
        platform: "Platform is missing! Please add one or more for the product."
      });
    }
    if (!product.title) {
      message.push({
        title: "Title is missing! Please add a title for the product."
      });
    }
    if (!product.poster) {
      message.push({
        poster: "Poster is missing! Please add a poster for the product."
      });
    }
    if (!product.description) {
      message.push({
        description: "Description is missing! Please add a description for the product."
      });
    }
    if (!product.price) {
      message.push({
        price: "Price is missing! Please add a price for the product."
      });
    }
    if (!product.stock) {
      message.push({
        stock: "Stock is missing! Please add a stock for the product."
      });
    }
    if (!product.trailerGame) {
      message.push({
        title: "Trailer is missing! Please add a link from YouTube for trailer."
      });
    }
  }  
  return message
}
