import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';

const categoryRoutes:Routes = [
    { path: '', component: CategoryListComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(categoryRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class CategoryRoutingModule { }