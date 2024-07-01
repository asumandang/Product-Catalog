import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
  numberAttribute,
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
import { ProductDetailStateService } from './product-detail-state.service';
import { RxLet } from '@rx-angular/template/let';
import { RxIf } from '@rx-angular/template/if';

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

  ngOnInit(): void {
    console.log(this.id);
  }
}
