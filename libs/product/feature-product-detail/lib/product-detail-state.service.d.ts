import * as i0 from "@angular/core";
export declare class ProductDetailStateService {
    private _route;
    private _productService;
    /**
     * Component state and its initial values
     */
    private readonly _state;
    product$: import("rxjs").Observable<{
        discountedPrice: number;
        id: number;
        name: string;
        price: number;
        description: string;
        imageUrl: string;
        discount: number;
    } | null>;
    isLoading$: import("rxjs").Observable<boolean>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductDetailStateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductDetailStateService>;
}
