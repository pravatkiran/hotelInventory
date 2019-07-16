import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss'],
})
export class PurchaseListComponent implements OnInit {

  constructor(
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [{
        text: 'View',
        icon: 'eye',
        handler: () =>{
          console.log('View clicked');
        }
      }, {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () =>{
          console.log('Delete clicked');
        }
      }, {
        text: 'Edit',
        icon: 'create',
        handler: () =>{
          console.log('Edit clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel', 
        handler: () =>{
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
