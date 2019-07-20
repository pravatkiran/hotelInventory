import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PurchaseProductAddComponent } from '../purchase-product-add/purchase-product-add.component';

@Component({
  selector: 'app-purchase-add',
  templateUrl: './purchase-add.component.html',
  styleUrls: ['./purchase-add.component.scss'],
})
export class PurchaseAddComponent implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {}

  async presentPopover(click: any) {
    const popover = await this.popoverController.create({
      component: PurchaseProductAddComponent,
      event: click,
      translucent: true
    });
    return await popover.present();
  } 
}
