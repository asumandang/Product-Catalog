import { HttpErrorResponse } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import {
  createComponentFactory,
  createSpyObject,
  type Spectator,
  SpyObject,
} from '@ngneat/spectator/jest';
import { RX_RENDER_STRATEGIES_CONFIG } from '@rx-angular/cdk/render-strategies';
import { of, throwError } from 'rxjs';

import { ProductService } from '@product/product-data-access';

import { ProductHomePage } from './product-home.page';

const product = {
  id: 1,
  name: 'Product 1',
  price: 100,
  description: 'Description for Product 1',
  discount: 10,
  imageUrl:
    'https://images.stockcake.com/public/b/5/2/b52d5e03-9e43-412d-99ae-675c1e61db56/executive-presenting-product-stockcake.jpg',
};

describe('ProductHomePage', () => {
  let spectator: Spectator<ProductHomePage>;
  let productService: SpyObject<ProductService>;
  const createComponent = createComponentFactory({
    component: ProductHomePage,
    declareComponent: false,
    detectChanges: false,
    providers: [
      provideRouter([]),
      {
        provide: RX_RENDER_STRATEGIES_CONFIG,
        useValue: {
          primaryStrategy: 'native',
        },
      },
    ],
    mocks: [ProductService],
  });

  beforeEach(() => {
    // mock product service to return empty list
    spectator = createComponent();
    productService = spectator.inject<ProductService>(ProductService);
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should display product list properly', () => {
    // mock product service to return products
    productService.getProducts.mockReturnValue(of([product]));
    spectator.detectChanges();

    const productList = spectator.queryAll<HTMLElement>('.product-list');
    expect(productList.length > 0).toBeTruthy();
  });

  it('should display error message when it occurs', () => {
    // mock product service to throw error
    productService.getProducts.mockReturnValue(
      throwError(() => new HttpErrorResponse({ status: 403 }))
    );
    spectator.detectChanges();

    const error = spectator.query<HTMLElement>('.error-text');
    expect(error).toBeTruthy();
  });

  it('should display empty list when no products are found', () => {
    productService.getProducts.mockReturnValue(of([]));
    spectator.detectChanges();

    const empty = spectator.query<HTMLElement>('.empty-text');
    expect(empty).toBeTruthy();
  });
});
