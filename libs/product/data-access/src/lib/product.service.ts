import { Injectable } from '@angular/core';

import * as productJson from './products.json';
import { Observable, of } from 'rxjs';
import { Product } from '@product/shared-dto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _json = productJson;

  getProducts(): Observable<Product[]> {
    return of<Product[]>(this._json.products);
  }
}
