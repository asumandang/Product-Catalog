import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ProductDetailPage implements OnInit {
    private readonly _stateService;
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
    id: string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductDetailPage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProductDetailPage, "pc-product-detail", never, { "id": { "alias": "id"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_id: unknown;
}
