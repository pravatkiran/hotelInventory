import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { RawMaterialListComponent } from './raw-material-list/raw-material-list.component';
import { RawMaterialFormComponent } from './raw-material-form/raw-material-form.component';

const productRoutes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'add', component: ProductFormComponent },
  { path: 'raw-material', component: RawMaterialListComponent },
  { path: 'raw-material/add', component: RawMaterialFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
