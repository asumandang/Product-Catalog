export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    discount: number;
}
export interface ProductDisplay extends Product {
    discountedPrice: number;
}
