import { Component } from '@angular/core';
import { ChartType, ChartData, ChartEvent, ActiveElement } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  standalone: false,
  templateUrl: './grafica1.html',
  styleUrls: ['./grafica1.css']
})
export class Grafica1 {

  public labels1: string [] = ['Download', 'In store', 'Mail-Order'];
  public data1 = [350, 450, 100];
}
