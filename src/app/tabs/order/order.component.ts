import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }
  
  // toogleSection(){
  //   var open = "1";
  //   open = !open;
  // }

  ngOnInit() {}

}
