import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    isLoginPage: boolean = false;
    isRootRoute: boolean = false;
  
    constructor(private router: Router) {}
  
    ngOnInit() {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.isLoginPage = this.router.url === '/login';
        this.isRootRoute = this.router.url === '/';
      });
    }
  }