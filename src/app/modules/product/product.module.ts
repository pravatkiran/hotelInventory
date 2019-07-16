import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { RawMaterialListComponent } from './raw-material-list/raw-material-list.component';
import { RawMaterialFormComponent } from './raw-material-form/raw-material-form.component';

@NgModule({
  declarations: [ProductListComponent, ProductFormComponent, RawMaterialListComponent, RawMaterialFormComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    IonicModule,
    SharedModule
  ]
})
export class ProductModule { }
