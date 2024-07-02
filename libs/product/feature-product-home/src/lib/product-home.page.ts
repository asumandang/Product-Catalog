import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonProgressBar,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToast,
  IonToolbar,
  type SearchbarCustomEvent,
} from '@ionic/angular/standalone';

import { RxFor } from '@rx-angular/template/for';
import { RxIf } from '@rx-angular/template/if';
import { RxLet } from '@rx-angular/template/let';
import { RxPush } from '@rx-angular/template/push';
import { addIcons } from 'ionicons';
import { arrowDownOutline, arrowUpOutline } from 'ionicons/icons';

import { ProductCardComponent } from '@product/product-ui/product-card';
import type { Sort } from '@product/shared-dto';

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
    IonToast,
    IonText,
    IonButton,
    IonButtons,
    IonIcon,
    RxFor,
    RxIf,
    RxLet,
    RxPush,
    RouterLink,
    ProductCardComponent,
    NgTemplateOutlet,
  ],
  viewProviders: [ProductHomeStateService],
})
export class ProductHomePage implements OnInit {
  readonly stateService = inject(ProductHomeStateService, { self: true });
  readonly product$ = this.stateService.product$;
  readonly isLoading$ = this.stateService.isLoading$;
  readonly error$ = this.stateService.error$;
  readonly action$ = this.stateService.action$;
  readonly sortProduct$ = this.stateService.sort$;

  /**
   * Seach input debounce time
   * Using the value as debounce time by approximating average human reaction
   * @see {@link https://humanbenchmark.com/tests/reactiontime/statistics|Human Reaction Statistics}
   */
  readonly debounceTime = 300;

  constructor() {
    addIcons({ arrowUpOutline, arrowDownOutline });
  }

  ngOnInit(): void {
    this.stateService.loadProducts();
  }

  searchProduct(event: SearchbarCustomEvent) {
    const searchText = event.detail.value;
    if (searchText) {
      this.stateService.searchProduct(searchText);
    }
  }

  resetSearch() {
    this.stateService.searchProduct(null);
  }

  sortBy(sortBy: Sort['by']) {
    this.stateService.sortBy(sortBy);
  }
}
