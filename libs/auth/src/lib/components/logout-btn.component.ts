import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'lib-logout-btn',
  standalone: true,
  imports: [MatIconButton, MatIconModule],
  template: `
    @if(authService.loggedInSignal()) {      
      <button mat-icon-button aria-label="Logout" (click)="authService.logout()">
        <mat-icon>logout</mat-icon>
      </button>
    }
  `,
  styles: ``
})
export class LogoutBtnComponent {
  constructor(readonly authService: AuthService){

  } 
}
