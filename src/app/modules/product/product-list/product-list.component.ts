import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  constructor(
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {}

  async presentActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [{
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
      },{
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
        handler: () =>{
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
