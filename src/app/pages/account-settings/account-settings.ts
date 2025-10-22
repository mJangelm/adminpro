import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  standalone: false,
  templateUrl: './account-settings.html',
  styleUrls: ['./account-settings.css'] 
})
export class AccountSettings implements AfterViewInit {

  ngAfterViewInit() {
    const saved = localStorage.getItem('theme') || 'blue-dark';
    const elemento = document.querySelector('#theme') as HTMLLinkElement;
    if (elemento) {
      elemento.href = `assets/css/colors/${saved}.css`;
    }
  }

  changeTheme(value: string) {
    const elemento = document.querySelector('#theme') as HTMLLinkElement;
    if (elemento) {
      elemento.href = `assets/css/colors/${value}.css`;
      localStorage.setItem('theme', value);
    }
  }
}
