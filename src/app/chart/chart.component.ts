import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  dataSource: Object;
  title: string;
  

  constructor() { 
  }

  ngOnInit(): void {
    this.chart();
  }

  chart(){

    let valor = [{ x: 144, y: 290 }, {x: 250, y: 350}];

    this.title = 'Angular  FusionCharts Sample';
 
    this.dataSource = {
      chart: {
        caption: 'Parametros',
        xaxisname: 'Velocidade',
        yaxisname: 'Ângulo',
        xaxisminvalue: '0',
        xaxismaxvalue: '1000',
        theme: 'fusion'
      },
      categories: [{
        category: [{

        }]
      }],
      dataset:[{
        data: valor
      }]
    };

    
    
  }

}
