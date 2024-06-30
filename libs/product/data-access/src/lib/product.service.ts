import { Injectable } from '@angular/core';

import * as products from './products.json';
import { of } from 'rxjs';
import { Product } from '@product/shared-dto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _products = products;

  getProducts() {
    return of<Product[]>(this._products);
  }
}
