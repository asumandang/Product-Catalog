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
import type { Product } from '@product/shared-dto';

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
  ],
})
export class ProductHomePage {
  readonly debounceTime = 300; // Using the value as debounce time by approximating average human reaction https://humanbenchmark.com/tests/reactiontime/statistics

  private readonly _productService = inject(ProductService);

  products: Product[] = [];

  searchProduct(event: SearchbarCustomEvent) {
    const searchText = event.detail.value;
  }
}
