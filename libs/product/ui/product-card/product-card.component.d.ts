import type { ProductDisplay } from '@product/shared-dto';
import * as i0 from "@angular/core";
export declare class ProductCardComponent {
    product: ProductDisplay | null;
    /**
     * Set image priority.
     * If image is above the fold (set to true roughly when the product card is one of the top 5 cards loaded)
     */
    isPriority: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProductCardComponent, "pc-product-card", never, { "product": { "alias": "product"; "required": true; }; "isPriority": { "alias": "isPriority"; "required": false; }; }, {}, never, never, true, never>;
}
