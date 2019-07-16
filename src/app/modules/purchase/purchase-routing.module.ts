import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';

const purchaseRoutes: Routes = [
  {path: '', component: PurchaseListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(purchaseRoutes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
