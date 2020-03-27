import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  

  Highcharts = Highcharts;
  chartOptions = {}
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        heigth: 60
      },
      title: {
        text: null //'Historic and Estimated Worldwide Population Growth by Region'
      },
      subtitle: {
        text: null //'Source: Wikipedia.org'
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []

      },
     
      exporting:{
        enabled: false //true,
      },
      credits: {
        enabled: false,
      },
      legend: {
        anable: false,
      },
      series: [{
        data: [70,78,50,66]
      
      //   name: 'Asia',
      //   data: [502, 635, 809, 947, 1402, 3634, 5268]
      // }, {
      //   name: 'Africa',
      //   data: [106, 107, 111, 133, 221, 767, 1766]
      // }, {
      //   name: 'Europe',
      //   data: [163, 203, 276, 408, 547, 729, 628]
      // }, {
      //   name: 'America',
      //   data: [18, 31, 54, 156, 339, 818, 1201]
      // }, {
      //   name: 'Oceania',
      //   data: [2, 2, 2, 6, 13, 30, 46]
       }]
    };
    HC_exporting(this.Highcharts)
  }

}
