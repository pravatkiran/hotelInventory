import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { PurchaseViewComponent } from './purchase-view/purchase-view.component';

@NgModule({
  declarations: [PurchaseListComponent, PurchaseViewComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    IonicModule,
    SharedModule
  ]
})
export class PurchaseModule { }
