import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: false,
  templateUrl: './progress.html',
  styleUrls: ['./progress.css']
})
export class Progress {

  progreso1: number = 25;
  progreso2: number = 12;

  get getProgreso1() {
    return `${this.progreso1}%`
  };

  get getProgreso2() {
    return `${this.progreso2}%`
  };



}
