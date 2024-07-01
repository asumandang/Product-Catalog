import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePage } from './view-message.page';
import { ViewMessagePageRoutingModule } from './view-message-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMessagePageRoutingModule,
  ],
  declarations: [ViewMessagePage],
})
export class ViewMessagePageModule {}
