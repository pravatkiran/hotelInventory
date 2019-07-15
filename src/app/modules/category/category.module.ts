import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    CategoryRoutingModule,  
  ]
})
export class CategoryModule { }
