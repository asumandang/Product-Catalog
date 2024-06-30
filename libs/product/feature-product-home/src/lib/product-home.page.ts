import { Component } from '@angular/core';
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
import { ProductCardComponent } from '@product/product-ui/product-card';

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
  searchProduct(event: SearchbarCustomEvent) {
    const searchText = event.detail.value;
  }
}
