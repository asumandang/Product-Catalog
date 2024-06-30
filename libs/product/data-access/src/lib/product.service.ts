import { Injectable } from '@angular/core';

import * as products from './products.json';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _products = products;

  getProducts() {
    return of(this._products);
  }
}
