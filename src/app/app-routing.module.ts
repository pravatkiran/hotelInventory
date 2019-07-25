import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'category', loadChildren: './modules/category/category.module#CategoryModule' },
  { path: 'product', loadChildren: './modules/product/product.module#ProductModule' },
  { path: 'supplier', loadChildren: './modules/supplier/supplier.module#SupplierModule' },
  { path: 'purchase', loadChildren: './modules/purchase/purchase.module#PurchaseModule' },
  { path: 'sales', loadChildren: './modules/sales/sales.module#SalesModule' },
  { path: 'order', loadChildren: './modules/order/order.module#OrderModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
