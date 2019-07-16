import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SupplierListComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    IonicModule,
    SharedModule
  ]
})
export class SupplierModule { }
