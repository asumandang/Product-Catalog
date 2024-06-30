import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let spectator: SpectatorService<ProductService>;
  const createService = createServiceFactory(ProductService);

  beforeEach(() => (spectator = createService()));

  it('should return products', (done) => {
    spectator.service.getProducts().subscribe((products) => {
      expect(products).toBeTruthy();
      done();
    });
  });
});
