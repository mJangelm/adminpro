import { Component } from '@angular/core';
import { ChartType, ChartData, ChartEvent, ActiveElement } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  standalone: false,
  templateUrl: './grafica1.html',
  styleUrls: ['./grafica1.css']
})
export class Grafica1 {

  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#7278beff', '#e80303ff', '#3dbc54ff'], // ✅ colores aquí
        hoverBackgroundColor: ['#b71c1c', '#a1887f', '#9e9e9e'], // (opcional)
        borderColor: '#fff', // (opcional)
      },
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';

  public chartClicked({ event, active }: { event: ChartEvent; active: ActiveElement[] }): void {
    console.log('click', event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent; active: ActiveElement[] }): void {
    console.log('hover', event, active);
  }
}
