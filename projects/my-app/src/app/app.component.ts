import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyLibComponent } from 'my-lib'; 
import { HeaderComponent } from 'shared-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyLibComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
