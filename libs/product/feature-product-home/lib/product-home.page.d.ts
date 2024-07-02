import { OnInit } from '@angular/core';
import { type SearchbarCustomEvent } from '@ionic/angular/standalone';
import type { Sort } from '@product/shared-dto';
import { ProductHomeStateService } from './product-home-state.service';
import * as i0 from "@angular/core";
export declare class ProductHomePage implements OnInit {
    readonly stateService: ProductHomeStateService;
    readonly product$: import("rxjs").Observable<import("@product/shared-dto").ProductDisplay[]>;
    readonly isLoading$: import("rxjs").Observable<boolean>;
    readonly error$: import("rxjs").Observable<string | null>;
    readonly action$: import("rxjs").Observable<string>;
    readonly sortProduct$: import("rxjs").Observable<Sort | null>;
    /**
     * Seach input debounce time
     * Using the value as debounce time by approximating average human reaction
     * @see {@link https://humanbenchmark.com/tests/reactiontime/statistics|Human Reaction Statistics}
     */
    readonly debounceTime = 300;
    constructor();
    ngOnInit(): void;
    searchProduct(event: SearchbarCustomEvent): void;
    resetSearch(): void;
    sortBy(sortBy: Sort['by']): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductHomePage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProductHomePage, "pc-product-home", never, {}, {}, never, never, true, never>;
}
