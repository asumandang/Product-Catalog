import { type Observable } from 'rxjs';
import { Product } from '@product/shared-dto';
import * as i0 from "@angular/core";
export declare class ProductService {
    private readonly _json;
    getProducts(): Observable<Product[]>;
    getProduct(id: number): Observable<Product | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductService>;
}
