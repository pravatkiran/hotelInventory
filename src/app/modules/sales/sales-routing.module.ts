import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesListComponent } from './sales-list/sales-list.component';

const saleRoutes: Routes = [
  {path: '', component: SalesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(saleRoutes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
