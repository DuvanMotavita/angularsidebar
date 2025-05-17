import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApxSideMenuComponent,TitleColor } from 'apx-side-menu-duvan27';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';
@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet,SideMenuComponent,ApxSideMenuComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export default class AdminLayoutComponent {

  isAuthenticated = signal(false);
  TitleColor = TitleColor;
  onLogin(){
    this.isAuthenticated.set(true);
  };
  onLogout() {
    this.isAuthenticated.set(false);
  };

}
