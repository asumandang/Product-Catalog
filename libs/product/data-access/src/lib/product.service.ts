import { Injectable } from '@angular/core';

import * as productJson from './products.json';
import { type Observable, delay, of } from 'rxjs';
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
}
