import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Settings } from '../../services/settings';

@Component({
  selector: 'app-account-settings',
  standalone: false,
  templateUrl: './account-settings.html',
  styleUrls: ['./account-settings.css']
})
export class AccountSettings implements OnInit, AfterViewInit {



  constructor(private SettingService: Settings) {

  }

  ngOnInit(): void {
    // Aquí puedes cargar configuraciones, pero no acceder al DOM aún.
  }

  ngAfterViewInit(): void {
    this.SettingService.checkCurrenTheme();

  }

  changeTheme(value: string): void {

    this.SettingService.changeTheme(value);

    
  }


}
