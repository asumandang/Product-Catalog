import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonSkeletonText,
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

    // For loading
    IonSkeletonText,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product: ProductDisplay | null = null;

  /**
   * Set image priority.
   * If image is above the fold (set to true roughly when the product card is one of the top 5 cards loaded)
   */
  @Input() isPriority = false;
}
