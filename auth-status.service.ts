import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthStatusService {
  private authStatus = new BehaviorSubject<boolean>(this.checkAuthStatus());

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private checkAuthStatus(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('authToken');
    }
    return false; // Default to not authenticated in non-browser environments
  }

  isAuthenticated(): Observable<boolean> {
    return this.authStatus.asObservable();
  }

  login(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('authToken', token);
      this.authStatus.next(true);
    }
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('authToken');
      this.authStatus.next(false);
    }
  }
}
