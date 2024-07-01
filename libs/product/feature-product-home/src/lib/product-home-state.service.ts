import { Injectable, inject } from '@angular/core';
import { ProductService } from '@product/product-data-access';
import type { Product, ProductDisplay } from '@product/shared-dto';
import { rxState } from '@rx-angular/state';
import { rxActions } from '@rx-angular/state/actions';
import { stateful } from '@rx-angular/state/selections';
import { type Observable, map, switchMap } from 'rxjs';

interface ProductHomePageState {
  products: Product[];
  action: 'initial' | 'pending' | 'error' | 'done';
}

@Injectable()
export class ProductHomeStateService {
  // Services
  private readonly _productService = inject(ProductService);

  /**
   * Actions that manages event that would update the component's state
   */
  private readonly _actions = rxActions<{
    loadProducts: void;
    searchProduct: string;
  }>();

  /**
   * Component state and its initial values
   */
  private readonly _state = rxState<ProductHomePageState>(({ set }) => {
    // set initial state
    set({ products: [], action: 'initial' });
  });

  /**
   * Products used for display
   */
  readonly product$: Observable<ProductDisplay[]> = this._state
    .select('products')
    .pipe(
      stateful(
        map((products) =>
          products.map((product) => ({
            ...product,
            discountedPrice:
              product.price - product.price * (product.discount / 100),
          }))
        )
      )
    );

  readonly isLoading$: Observable<boolean> = this._state
    .select('action')
    .pipe(stateful(map((action) => action === 'pending')));

  constructor() {
    // sets actions to pending on calling load product command
    this._state.connect(this._actions.loadProducts$, (state) => ({
      ...state,
      action: 'pending',
    }));

    // loads the products on calling load product command
    this._state.connect(
      this._actions.loadProducts$.pipe(
        switchMap(() => this._productService.getProducts()),
        map((products) =>
          products.map((product) => ({
            ...product,
            discountedPrice:
              product.price - product.price * (product.discount / 100),
          }))
        )
      ),
      (state, products) => ({ ...state, products, action: 'done' })
    );
  }

  loadProducts() {
    this._actions.loadProducts();
  }

  searchProduct(searchText: string) {
    this._actions.searchProduct(searchText);
  }
}
