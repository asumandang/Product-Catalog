import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonRefresher,
  IonRefresherContent,
  IonList,
  IonTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'lib-product-home',
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
  ],
})
export class ProductHomePage {}
