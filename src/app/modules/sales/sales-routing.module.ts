import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesViewComponent } from './sales-view/sales-view.component';

const saleRoutes: Routes = [
  { path: '', component: SalesListComponent },
  { path: 'view', component: SalesViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(saleRoutes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
