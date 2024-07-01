import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
} from '@ionic/angular/standalone';
import type { ProductDisplay } from '@product/shared-dto';

@Component({
  selector: 'pc-product-card',
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    NgOptimizedImage,
    CurrencyPipe,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product: ProductDisplay | null = null;
}
