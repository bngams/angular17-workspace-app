import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyLibComponent } from 'my-lib'; 
import { HeaderComponent, MenuComponent } from 'shared-ui';
import { AuthService, LogoutBtnComponent } from 'auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyLibComponent, HeaderComponent, MenuComponent, LogoutBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  /* providers: ... */
})
export class AppComponent {
  title = 'my-app';

  localLoginState = false;

  constructor(
    readonly authService: AuthService
  ) { }

  ngOnInit() {
    // use observer / subjet to update login status
    this.authService.loggedInSubject$.subscribe(status => {
      console.log('NOTIF FROM authService.loggedInSubject$, logged in is ', status);
        this.localLoginState = status;
    });
  }

  getLoggedInFromAuth(): boolean {
    return this.authService.loggedIn;
  }

  get loggedInFromAuth() {
    return this.authService.loggedIn;
  }
}
