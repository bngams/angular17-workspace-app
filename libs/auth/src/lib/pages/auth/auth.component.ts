import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'lib-auth',
  standalone: true,
  imports: [MatTabsModule, LoginFormComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
