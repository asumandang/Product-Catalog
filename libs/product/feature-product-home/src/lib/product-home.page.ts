import { Component, OnInit, inject } from '@angular/core';
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
  IonProgressBar,
} from '@ionic/angular/standalone';
import { ProductCardComponent } from '@product/product-ui/product-card';
import { RxFor } from '@rx-angular/template/for';
import { RxIf } from '@rx-angular/template/if';
import { ProductHomeStateService } from './product-home-state.service';

@Component({
  selector: 'pc-product-home',
  standalone: true,
  templateUrl: './product-home.page.html',
  styleUrl: './product-home.page.scss',
  imports: [
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonRefresher,
    IonRefresherContent,
    IonSearchbar,
    IonTitle,
    IonToolbar,
    IonProgressBar,
    RxFor,
    RxIf,
    ProductCardComponent,
  ],
  viewProviders: [ProductHomeStateService],
})
export class ProductHomePage implements OnInit {
  readonly stateService = inject(ProductHomeStateService, { self: true });
  readonly product$ = this.stateService.product$;
  readonly isLoading$ = this.stateService.isLoading$;

  /**
   * Seach input debounce time
   * Using the value as debounce time by approximating average human reaction
   * @see {@link https://humanbenchmark.com/tests/reactiontime/statistics|Human Reaction Statistics}
   */
  readonly debounceTime = 300;

  ngOnInit(): void {
    this.stateService.loadProducts();
  }

  searchProduct(event: SearchbarCustomEvent) {
    const searchText = event.detail.value;
    if (searchText) {
      this.stateService.searchProduct(searchText);
    }
  }
}
