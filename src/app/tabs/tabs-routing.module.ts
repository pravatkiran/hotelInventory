import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';

const orderRoutes : Routes=[
    {
        path:'order',
        component:OrderComponent
    }
]

@NgModule({
    declarations:[],
    imports:[
        RouterModule.forChild(orderRoutes)
    ],
    exports:[RouterModule]
})

export class TabsRoutingModule { };