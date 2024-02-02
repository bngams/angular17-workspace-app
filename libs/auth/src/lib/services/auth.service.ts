import { Injectable, WritableSignal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Credentials } from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  /**
   * Logged in status with RxJS Subject
   * like "new Observable()"
   * $ suffix => async / Observable
   */
  loggedInSubject$ = new BehaviorSubject<boolean>(false);

  /**
   * Logged in status with new Signal API
   */
  loggedInSignal: WritableSignal<boolean> = signal(false);

  

  constructor(private router: Router) {
    this.loadSession();
  }

  loadSession(): void {
    if(localStorage.getItem('token')) {      
      this.setLoggedIn(true);
    }
  }

  startSession(): void {
    localStorage.setItem('token', 'fakeToken');
  }

  closeSession(): void {
    localStorage.removeItem('token');
  }

  login(crendentials: Credentials): void {
    console.log('login', crendentials);    
    this.setLoggedIn(true);
    this.startSession();
    this.redirectToHome();
  }

  logout(): void {
    console.log('logout');
    this.setLoggedIn(false);
    this.closeSession();
    this.redirectToHome();
  }

  redirectToHome(): void {
    this.router.navigateByUrl('/home');
  }

  setLoggedIn(status: boolean){
    // update static field
    this.loggedIn = status;

    // update subject 
    this.loggedInSubject$.next(status);

    // update subject 
    this.loggedInSignal.set(status);
  } 

  // /!\ on context changes if used directly on a template
  isLoggedIn(): boolean {
    // check local token
    return this.loggedIn;
  }

  hasPermission(perm: string): boolean {
    if(!this.isLoggedIn()) {
      console.log('hasPermission false');
      return false;
    }
    // appel http
    return true;
  }
}
