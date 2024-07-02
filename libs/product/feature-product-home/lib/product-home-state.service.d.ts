import { type Observable } from 'rxjs';
import type { ProductDisplay, Sort } from '@product/shared-dto';
import * as i0 from "@angular/core";
export declare class ProductHomeStateService {
    private readonly _productService;
    /**
     * Actions that manages event that would update the component's state
     */
    private readonly _actions;
    /**
     * Component state and its initial values
     */
    private readonly _state;
    /**
     * Products used for display
     */
    readonly product$: Observable<ProductDisplay[]>;
    readonly action$: Observable<string>;
    readonly sort$: Observable<Sort | null>;
    readonly isLoading$: Observable<boolean>;
    readonly error$: Observable<string | null>;
    constructor();
    loadProducts(): void;
    searchProduct(searchText: string | null): void;
    sortBy(sortBy: Sort['by']): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductHomeStateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductHomeStateService>;
}
