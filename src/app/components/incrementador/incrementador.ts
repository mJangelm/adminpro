import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  standalone: false,
  templateUrl: './incrementador.html',
  styleUrl: './incrementador.css'
})
export class Incrementador  implements OnInit{

  ngOnInit() {
  this.btnClass = `btn ${this.btnClass}`;
  }

  @Input() progreso: number = 5;
  @Input() btnClass: string = 'btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();


  aumentarPorcentaje() {
    if (this.progreso < 100) {
          this.progreso+=5;
          this.valorSalida.emit(this.progreso);
    }

  }

    disminuirPorcentaje() {
    if (this.progreso > 0) {
          this.progreso-=5;
          this.valorSalida.emit(this.progreso);
    }

  }

onChange(valor: number) {

if (valor > 100) {
this.valorSalida.emit(100)
} else if (valor < 0) {
this.valorSalida.emit(0)
} else {
this.valorSalida.emit(valor)
}

};

}
