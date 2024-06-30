import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-product-home',
  standalone: true,
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHomeComponent {}
