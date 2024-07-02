import { ActivatedRoute, provideRouter } from '@angular/router';

import { createComponentFactory, type Spectator } from '@ngneat/spectator/jest';
import { RX_RENDER_STRATEGIES_CONFIG } from '@rx-angular/cdk/render-strategies';
import { of } from 'rxjs';

import { ProductService } from '@product/product-data-access';

import { ProductDetailPage } from './product-detail.page';

const product = {
  id: 1,
  name: 'Product 1',
  price: 100,
  description: 'Description for Product 1',
  discount: 10,
  imageUrl:
    'https://images.stockcake.com/public/b/5/2/b52d5e03-9e43-412d-99ae-675c1e61db56/executive-presenting-product-stockcake.jpg',
};

describe('ProductDetailPage', () => {
  let spectator: Spectator<ProductDetailPage>;
  const createComponent = createComponentFactory({
    component: ProductDetailPage,
    declareComponent: false,
    providers: [
      provideRouter([]),
      { provide: ActivatedRoute, useValue: { params: of({ id: 1 }) } },
      {
        provide: RX_RENDER_STRATEGIES_CONFIG,
        useValue: {
          primaryStrategy: 'native',
        },
      },
    ],
    mocks: [ProductService],
  });

  it('should create', () => {
    spectator = createComponent({
      providers: [
        {
          provide: ProductService,
          useValue: {
            getProduct() {
              return of(product);
            },
          },
        },
      ],
    });

    expect(spectator.component).toBeTruthy();
  });

  it('should display product details correctly', () => {
    // mock product service to return a product
    spectator = createComponent({
      providers: [
        {
          provide: ProductService,
          useValue: {
            getProduct() {
              return of(product);
            },
          },
        },
      ],
    });

    const productName = spectator.query<HTMLElement>('.product-name');
    const productPrice = spectator.query<HTMLElement>('.product-price');
    const pDescription = spectator.query<HTMLElement>('.product-description');
    expect(productName).toBeTruthy();
    expect(productPrice).toBeTruthy();
    expect(pDescription).toBeTruthy();
  });

  it('should display no product if not found', () => {
    // mock product service to return no product
    spectator = createComponent({
      providers: [
        {
          provide: ProductService,
          useValue: {
            getProduct() {
              return of(null);
            },
          },
        },
      ],
    });

    const noProduct = spectator.query<HTMLElement>('.no-product-text');
    expect(noProduct).toBeTruthy();
  });
});
