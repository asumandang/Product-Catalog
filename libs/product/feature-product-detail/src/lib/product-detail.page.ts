import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';

import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonProgressBar,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { RxIf } from '@rx-angular/template/if';
import { RxLet } from '@rx-angular/template/let';
import { addIcons } from 'ionicons';
import { caretBack } from 'ionicons/icons';

import { ProductDetailStateService } from './product-detail-state.service';

@Component({
  selector: 'pc-product-detail',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonProgressBar,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButtons,
    IonBackButton,
    NgOptimizedImage,
    RxLet,
    RxIf,
    CurrencyPipe,
  ],
  templateUrl: './product-detail.page.html',
  styleUrl: './product-detail.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [ProductDetailStateService],
})
export class ProductDetailPage implements OnInit {
  private readonly _stateService = inject(ProductDetailStateService, {
    self: true,
  });

  product$ = this._stateService.product$;
  isLoading$ = this._stateService.isLoading$;
  @Input({ transform: numberAttribute }) id = '';

  constructor() {
    addIcons({ caretBack });
  }

  ngOnInit(): void {
    console.log(this.id);
  }
}
