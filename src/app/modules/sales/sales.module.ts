import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesListComponent } from './sales-list/sales-list.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SalesListComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule,
    IonicModule
  ]
})
export class SalesModule { }
