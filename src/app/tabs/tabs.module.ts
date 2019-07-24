import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { TabsRoutingModule } from './tabs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule,
    SharedModule,
    IonicModule
  ]
})
export class TabsModule { }
