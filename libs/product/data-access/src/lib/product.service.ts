import { Injectable } from '@angular/core';

import * as productJson from './products.json';
import { type Observable, delay, of, map } from 'rxjs';
import { Product } from '@product/shared-dto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _json = productJson;

  getProducts(): Observable<Product[]> {
    // adding delay to imitate api delay
    return of<Product[]>(this._json.products).pipe(delay(500));
  }

  getProduct(id: number): Observable<Product | null> {
    // adding delay to imitate api delay
    return this.getProducts().pipe(
      map((products) => {
        return products?.find((product) => product.id === +id) ?? null;
      })
    );
  }
}
