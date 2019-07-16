import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';

@NgModule({
  declarations: [SupplierListComponent, SupplierFormComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    IonicModule,
    SharedModule
  ]
})
export class SupplierModule { }
