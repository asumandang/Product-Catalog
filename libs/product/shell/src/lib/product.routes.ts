import { Route } from '@angular/router';

export const productRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('@product/product-home').then((m) => m.ProductHomePage),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('@product/product-detail').then((m) => m.ProductDetailPage),
  },
];
