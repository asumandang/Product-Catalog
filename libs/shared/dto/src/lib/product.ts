export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  discount: number; // percent
}

export interface ProductDisplay extends Product {
  discountedPrice: number;
}
