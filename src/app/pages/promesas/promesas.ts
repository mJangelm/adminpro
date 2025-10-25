import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.html',
  styleUrls: ['./promesas.css'], // ✔ corregido
  standalone: false
})
export class Promesas implements OnInit {
  ngOnInit(): void {
    this.getUsuarios().then (usuario => {
      console.log(usuario);
    })
  }

getUsuarios() {
return new Promise(resolve => {

  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(resp => resp.json() )
    .then (body => resolve(body.results));

});

}

}
