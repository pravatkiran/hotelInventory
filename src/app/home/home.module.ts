import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    Ng2GoogleChartsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
