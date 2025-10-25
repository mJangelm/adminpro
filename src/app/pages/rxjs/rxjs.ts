import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, retry,Subscription,take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: false,
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css'
})
export class Rxjs implements OnDestroy {

  public intervalSubs : Subscription;

constructor() {

// this.retornaObservable().pipe(
// retry(1) //el retry va a seguir intentandolo hasta que lo logremos.
// ).
// subscribe(
//   valor => console.log('subs: ',valor),
//   err=> console.warn('Error :', err),
//   () =>console.info('Obs terminado')
// );

this.intervalSubs =this.retornaIntervalo().subscribe(console.log)

}
  ngOnDestroy(): void {
   this.intervalSubs.unsubscribe();
  }

retornaIntervalo() {
  return interval(500)
  .pipe(
        take(10),
         map(valor=> valor+1),
          filter(valor => (valor % 2 === 0) ? true : false),
  );


}

retornaObservable() : Observable<number> {
  let i = -1;

 return new Observable<number>(observer => {

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
}

}
