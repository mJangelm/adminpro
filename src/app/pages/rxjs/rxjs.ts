import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: false,
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css'
})
export class Rxjs {

constructor() {

const obs$ = new Observable(observer => {

  let i = -1;

 const intervalo= setInterval(()=> {
    i++;
    observer.next(i);

    if (i === 4) {
      clearInterval(intervalo);
      observer.complete();
    }

      if (i === 2 ) {
    observer.error('i llegó al valor de dos');
  }
  },1000)

});

obs$.subscribe(
  valor => console.log('subs: ',valor),
  err=> console.warn('Error :', err),
  () =>console.info('Obs terminado')
);

}


}
