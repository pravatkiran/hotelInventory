import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {

  constructor(
    public actionSheetController: ActionSheetController
  ) { }

  async presentActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      mode: 'md',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () =>{
          console.log('Delete clicked');
        }
      },{
        text: 'Edit',
        icon: 'create',
        handler: () =>{
          console.log('Edit clicked');
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () =>{
          console.log('Cancel clicked');
        }
      }
    ]
    });
    await actionSheet.present();
  }

  ngOnInit() {
  }



}
