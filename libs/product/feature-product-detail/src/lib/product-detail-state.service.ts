import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '@product/product-data-access';
import { Product } from '@product/shared-dto';
import { rxState } from '@rx-angular/state';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs';

interface ProductDetailPageState {
  product: Product | null;
  action: 'initial' | 'pending' | 'error' | 'done';
  errorMessage: string | null;
}

@Injectable()
export class ProductDetailStateService {
  private _route = inject(ActivatedRoute);
  private _productService = inject(ProductService);
  /**
   * Component state and its initial values
   */
  private readonly _state = rxState<ProductDetailPageState>(({ set }) => {
    // set initial state
    set({ product: null, action: 'initial', errorMessage: null });
  });

  product$ = this._state.select('product').pipe(
    map((product) =>
      product
        ? {
            ...product,
            discountedPrice:
              product.price - product.price * (product.discount / 100),
          }
        : null
    )
  );
  isLoading$ = this._state
    .select('action')
    .pipe(map((action) => action === 'pending'));

  constructor() {
    // observe when the ID in the params changes
    const idRouteChanges$ = this._route.params.pipe(
      map((params) => params['id'] as number),
      distinctUntilChanged(),
      tap(() =>
        this._state.set((state) => ({
          ...state,
          action: 'pending',
          product: null,
        }))
      )
    );

    // reads from the route parameter for changes

    this._state.connect(
      idRouteChanges$.pipe(
        tap((x) => console.log(x)),
        switchMap((id) => this._productService.getProduct(id))
      ),
      (state, product) => {
        console.log(product);
        return { ...state, product, action: 'done' };
      }
    );
  }
}
