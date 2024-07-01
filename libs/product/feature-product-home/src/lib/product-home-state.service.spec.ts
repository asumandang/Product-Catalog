import { TestBed } from '@angular/core/testing';

import { ProductHomeStateService } from './product-home-state.service';

describe('ProductHomeStateService', () => {
  let service: ProductHomeStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHomeStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
