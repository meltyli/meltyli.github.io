import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Advanced Example Website';

  ngOnInit(): void {
    AOS.init({
      offset: 100 // Adjust this value as needed
    });
  }
  
}


