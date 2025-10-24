import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar-service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  menuItems!: any[]
  constructor(private sidebarService: SidebarService) {
    this.menuItems = sidebarService.menu;
    console.log(this.menuItems)
  }
}
