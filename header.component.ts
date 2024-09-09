import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthStatusService } from '../auth-status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl:'./header.component.css'
  
})
export class HeaderComponent {
  searchQuery: string = '';
  isAuthenticated: boolean = false;

  constructor(private router: Router,private authStatusService: AuthStatusService) {}


  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchQuery); // Emit the search query
  }
  ngOnInit(): void {
    this.authStatusService.isAuthenticated().subscribe(status => {
      this.isAuthenticated = status;
    });
  }
}