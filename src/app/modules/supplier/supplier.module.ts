import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { SupplierViewComponent } from './supplier-view/supplier-view.component';

@NgModule({
  declarations: [SupplierListComponent, SupplierFormComponent, SupplierViewComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    IonicModule,
    SharedModule
  ]
})
export class SupplierModule { }
