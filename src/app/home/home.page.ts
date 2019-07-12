import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { NavController, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  length = 0;
  data = document.getElementById('data')

  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('anotherCanvas') anotherCanvas;
  // @ViewChild('lineCanvas') lineCanvas;
  doughnutChart: any;
  // lineChart: any;

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.ionViewDidLoad();
  }


  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["Gorkha", "Tuborg", "Sprite", "CocaCola", "Arna", "Vodka"],
        datasets: [{
          label: '# of Votes',
          data: [50, 20, 90, 20, 40, 70],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)'
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
      }
    });
    this.doughnutChart = new Chart(this.anotherCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["Rice", "Sugar", "Meat", "Vegetable", "Fist", "Potatoe"],
        datasets: [{
          label: '# of Votes',
          data: [90, 30, 60, 80, 20, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)'
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
      }
    });
  } 
}
