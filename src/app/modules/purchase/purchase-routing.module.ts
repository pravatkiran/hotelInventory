import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseViewComponent } from './purchase-view/purchase-view.component';
import { PurchaseAddComponent } from './purchase-add/purchase-add.component';

const purchaseRoutes: Routes = [
  { path: '', component: PurchaseListComponent },
  { path: 'view', component: PurchaseViewComponent },
  { path: 'add', component: PurchaseAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(purchaseRoutes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
