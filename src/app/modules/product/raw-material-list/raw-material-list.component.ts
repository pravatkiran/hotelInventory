import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-raw-material-list',
  templateUrl: './raw-material-list.component.html',
  styleUrls: ['./raw-material-list.component.scss'],
})
export class RawMaterialListComponent implements OnInit {

  constructor(
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {}

  async presentActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Action',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      },{
        text: 'Edit',
        icon: 'create',
        handler: () =>{
          console.log('Edit clicked');
        }
      }, {
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
