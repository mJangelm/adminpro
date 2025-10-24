import { Component, OnInit } from '@angular/core';
import { Settings } from '../services/settings';

@Component({
  selector: 'app-pages',
  standalone: false,
  templateUrl: './pages.html',
  styleUrl: './pages.css'
})
export class Pages implements OnInit {



  constructor(private settingService: Settings) {}

  ngOnInit() : void {

    
  }
}
