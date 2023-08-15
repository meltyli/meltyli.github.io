import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css']
})

export class LoadingBarComponent implements OnInit {
  loading: boolean = true;
  loadingProgress: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        this.loadingProgress = 20; // Initial progress
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loadingProgress = 100; // Completed progress
        setTimeout(() => {
          this.loading = false;
          this.loadingProgress = 0;
        }, 300); // Delay for transition completion
      }
    });
  }
}
