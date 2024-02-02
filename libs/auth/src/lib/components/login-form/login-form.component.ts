import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user';
import { MaterialFormsUtils } from 'shared-ui';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

/**
 * Source: https://betterprogramming.pub/how-to-build-a-strongly-typed-angular-14-super-form-86837965a0e5
 */
// TODO: put in a separated file and better location
export type ControlsOf<T extends Record<string, any>> = {
  // title: FormControl<string>;
  [K in keyof T]: T[K] extends Record<any, any>
  ? FormGroup<ControlsOf<T[K]>>
  : FormControl<T[K]>;
};

@Component({
  selector: 'lib-login-form',
  standalone: true,
  imports: [MaterialFormsUtils, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  /**
   * Output demo, can be useful to notify parent comp. of something
   */
  @Output()
  loginSubmit: EventEmitter<String> = new EventEmitter();

  /**
   * create object form
   * untyped => new UntypedFormGroup({
   * with type => (since angular 14/15)
   */  
  loginForm = new FormGroup<ControlsOf<User>>({
    email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
    pwd: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.min(8)]})
  });

  // DI
  constructor(private authService: AuthService) { }

  submit(): void {
    // let vs const
    const user: User = this.loginForm.value;

    // debugger 
    // vs
    // console.log(user)

    // @Output()
    this.loginSubmit.emit(user.email);

    // with service (@Injectable)
    this.authService.login(user);
  }
}
