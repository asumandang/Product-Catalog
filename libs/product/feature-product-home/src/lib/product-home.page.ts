import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonRefresher,
  IonRefresherContent,
  IonList,
  IonTitle,
  IonItem,
  IonSearchbar,
  type SearchbarCustomEvent,
} from '@ionic/angular/standalone';
import { ProductService } from '@product/product-data-access';
import { ProductCardComponent } from '@product/product-ui/product-card';
import type { Product, ProductDisplay } from '@product/shared-dto';
import { rxState } from '@rx-angular/state';
import { stateful } from '@rx-angular/state/selections';
import { RxFor } from '@rx-angular/template/for';
import { Observable, map, tap } from 'rxjs';

interface ProductHomePageState {
  products: Product[];
}

@Component({
  selector: 'pc-product-home',
  standalone: true,
  templateUrl: './product-home.page.html',
  styleUrl: './product-home.page.scss',
  imports: [
    IonHeader,
    IonToolbar,
    IonSearchbar,
    IonContent,
    IonRefresher,
    IonRefresherContent,
    IonList,
    IonTitle,
    ProductCardComponent,
    IonItem,
    RxFor,
  ],
})
export class ProductHomePage {
  private readonly _productService = inject(ProductService);
  private readonly _state = rxState<ProductHomePageState>(
    ({ set, connect }) => {
      // set initial state
      set({ products: [] });
      // connect data source to state
      connect(
        'products',
        this._productService.getProducts().pipe(tap(console.log))
      );
    }
  );

  readonly debounceTime = 300; // Using the value as debounce time by approximating average human reaction https://humanbenchmark.com/tests/reactiontime/statistics
  readonly product$: Observable<ProductDisplay[]> = this._state
    .select('products')
    .pipe(
      stateful(
        map((products) =>
          products.map((product) => ({
            ...product,
            discountedPrice:
              product.price - product.price * (product.discount / 100),
          }))
        )
      )
    );

  searchProduct(event: SearchbarCustomEvent) {
    const searchText = event.detail.value;
  }
}
