import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  standalone: false,
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css'
})
export class Breadcrumbs implements OnDestroy {

     public titulo?: any;
     tituloSubs$: Subscription;

  constructor(private router : Router) {
    this.tituloSubs$ = this.getArgumentosRuta()
    .subscribe(data => {
            console.log(data);
            this.titulo = data['titulo'];
            document.title= this.titulo;

    });
  }
  ngOnDestroy(): void {
   this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta() {
    

    return this.router.events
    .pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data),

    );

  }

}
