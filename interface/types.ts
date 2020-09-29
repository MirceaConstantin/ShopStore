export interface Product {
    _id: {$oid: string},
    title: string;
    imagePoster: string;
    imageSlider: Array<string>;
    trailerGame: string;
    description: string;
    price: number;
    genre: Array<string>;
    platform: Array<string>;
    stock: number;
  }
