import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const categoryRoutes:Routes = [
    { path: '', component: CategoryListComponent},
    { path: 'add', component: CategoryFormComponent}
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