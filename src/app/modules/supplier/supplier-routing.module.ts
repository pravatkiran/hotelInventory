import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';

const supplierRoutes: Routes = [
  { path: '', component: SupplierListComponent },
  { path: 'add', component: SupplierFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(supplierRoutes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
