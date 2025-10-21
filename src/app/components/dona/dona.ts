import { Component, Input, OnChanges } from '@angular/core';
import { ChartData, ChartType, ChartEvent, ActiveElement } from 'chart.js';

@Component({
  selector: 'app-dona',
  standalone: false,
  templateUrl: './dona.html',
  styleUrls: ['./dona.css']
})
export class Dona implements OnChanges {

  // 👇 Recibimos valores desde el padre
  @Input() titulo: string = 'Sin título';
  @Input() labels: string[] = []; // ✅ recibe etiquetas
  @Input() data: number[] = [];   // ✅ recibe datos

  // Propiedades del gráfico
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#7278beff', '#e80303ff', '#3dbc54ff'],
        hoverBackgroundColor: ['#b71c1c', '#a1887f', '#9e9e9e'],
        borderColor: '#fff',
      },
    ],
  };

  // Cuando cambian los inputs
  ngOnChanges(): void {
    this.doughnutChartData = {
      labels: this.labels && this.labels.length > 0 ? this.labels : ['Download', 'In Store', 'Mail Order'],
      datasets: [
        {
          data: this.data && this.data.length > 0 ? this.data : [350, 450, 100],
          backgroundColor: ['#7278beff', '#e80303ff', '#3dbc54ff'],
          hoverBackgroundColor: ['#b71c1c', '#a1887f', '#9e9e9e'],
          borderColor: '#fff',
        },
      ],
    };
  }

  public chartClicked({ event, active }: { event: ChartEvent; active: ActiveElement[] }): void {
    console.log('click', event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent; active: ActiveElement[] }): void {
    console.log('hover', event, active);
  }
}
