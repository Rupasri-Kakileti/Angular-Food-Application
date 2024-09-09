import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router ) {}

  login() {
    // Replace with real authentication logic
    if (this.username === 'Rupa' && this.password === 'password') {
      localStorage.setItem('authToken', 'your-auth-token'); // Store auth token
      this.router.navigate(['/foodstuffs']); // Redirect to a protected route
    } else {
      alert('Invalid credentials');
    }
  }
}

