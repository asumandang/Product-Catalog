import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProductService } from '@product/product-data-access';
import type { Product, ProductDisplay } from '@product/shared-dto';
import { rxState } from '@rx-angular/state';
import { rxActions } from '@rx-angular/state/actions';
import { selectSlice, stateful } from '@rx-angular/state/selections';
import { type Observable, map, switchMap, EMPTY, catchError } from 'rxjs';

interface ProductHomePageState {
  products: Product[];
  action: 'initial' | 'pending' | 'error' | 'done';
  searchText: string | null;
  errorMessage: string | null;
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
    searchProduct: string | null;
    handleLoadingError: unknown;
  }>();

  /**
   * Component state and its initial values
   */
  private readonly _state = rxState<ProductHomePageState>(({ set }) => {
    // set initial state
    set({ products: [], action: 'initial', searchText: null });
  });

  /**
   * Products used for display
   */
  readonly product$: Observable<ProductDisplay[]> = this._state.select().pipe(
    selectSlice(['products', 'searchText']),
    stateful(
      map(({ products, searchText }) => {
        const filteredProducts = searchText
          ? products.filter((product) =>
              product.name.toLowerCase().includes(searchText.toLowerCase())
            )
          : products;
        return filteredProducts.map((product) => ({
          ...product,
          discountedPrice:
            product.price - product.price * (product.discount / 100),
        }));
      })
    )
  );

  readonly action$: Observable<string> = this._state.select('action');
  readonly isLoading$: Observable<boolean> = this._state
    .select('action')
    .pipe(stateful(map((action) => action === 'pending')));
  readonly error$: Observable<string | null> = this._state
    .select('action')
    .pipe(
      stateful(
        map((action) => {
          if (action !== 'error') {
            return null;
          }

          return this._state.get('errorMessage');
        })
      )
    );

  constructor() {
    // sets actions to pending on calling load product command
    this._state.connect(this._actions.loadProducts$, (state) => ({
      ...state,
      errorMessage: null,
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
        ),
        catchError((err: unknown) => {
          this._actions.handleLoadingError(err);
          return EMPTY;
        })
      ),
      (state, products) => ({
        ...state,
        products,
        action: 'done',
      })
    );

    // handle error that occurred while loading
    this._state.connect(
      this._actions.handleLoadingError$.pipe(
        map((err) => {
          const message =
            err instanceof HttpErrorResponse
              ? err.message
              : 'An unknown error has occurred. Please contact admin for assistance.';
          return message;
        })
      ),
      (state, errorMessage) => {
        return { ...state, errorMessage, action: 'error' };
      }
    );

    // set search text
    this._state.connect(this._actions.searchProduct$, (state, searchText) => {
      return { ...state, searchText };
    });
  }

  loadProducts() {
    this._actions.loadProducts();
  }

  searchProduct(searchText: string | null) {
    this._actions.searchProduct(searchText);
  }
}
