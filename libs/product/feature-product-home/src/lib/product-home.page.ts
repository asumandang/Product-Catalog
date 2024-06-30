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
    IonContent,
    IonRefresher,
    IonRefresherContent,
    IonList,
    IonTitle,
    ProductCardComponent,
    IonItem,
  ],
})
export class ProductHomePage {}
