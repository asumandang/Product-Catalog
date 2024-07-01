import { ProductDisplay } from '@product/shared-dto';
import { type Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { RX_RENDER_STRATEGIES_CONFIG } from '@rx-angular/cdk/render-strategies';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  const product: ProductDisplay = {
    id: 1,
    name: 'Test Product',
    price: 100,
    description: 'This is a test product',
    imageUrl: 'assets/image/placeholder.png',
    discount: 0,
    discountedPrice: 0,
  };
  const productWithDiscount: ProductDisplay = {
    ...product,
    discount: 10,
    discountedPrice: 90,
  };

  let spectator: Spectator<ProductCardComponent>;
  const createComponent = createComponentFactory({
    component: ProductCardComponent,
    declareComponent: false,
    providers: [
      {
        provide: RX_RENDER_STRATEGIES_CONFIG,
        useValue: {
          primaryStrategy: 'native',
        },
      },
    ],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should display product details properly', () => {
    spectator.setInput({ product });

    // retrieve product related elements
    const name = spectator.query<HTMLElement>('.product-name');
    const price = spectator.query<HTMLElement>('.product-price');
    const description = spectator.query<HTMLElement>('.product-description');

    // check product values
    expect(name?.textContent).toContain('Test Product');
    expect(price?.textContent).toContain('₱100.00');
    expect(description?.textContent).toContain('This is a test product');
  });

  it('should display discount if discount amount greater than 0', () => {
    spectator.setInput({ product: productWithDiscount });

    // retrieve discount related elements
    const discounted = spectator.query<HTMLSpanElement>('.discounted');
    const original = spectator.query<HTMLSpanElement>('.original');
    const discount = spectator.query<HTMLSpanElement>('.discount');

    // check discount values
    expect(discounted?.textContent).toContain('₱90.00');
    expect(original?.textContent).toContain('₱100.00');
    expect(discount?.textContent).toContain('(10% off)');
  });
});
