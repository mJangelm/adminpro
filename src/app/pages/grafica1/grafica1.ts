import { Component } from '@angular/core';
import { ChartType, ChartEvent } from 'chart.js';
import { ChartData, ActiveElement } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  standalone: false,
  templateUrl: './grafica1.html',
  styleUrls: ['./grafica1.css']
})
export class Grafica1 {

  // 🍩 Configuración del gráfico Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] },
      { data: [50, 150, 120] },
      { data: [250, 130, 70] },
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';

  // 📊 Eventos
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: ActiveElement[];
  }): void {
    console.log('click', event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: ActiveElement[];
  }): void {
    console.log('hover', event, active);
  }

}
