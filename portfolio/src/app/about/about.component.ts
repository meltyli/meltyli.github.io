import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // JavaScript for the interactive timeline
    const events = document.querySelectorAll('.event');
    events.forEach(event => {
      event.addEventListener('mouseenter', () => {
        event.classList.add('active');
      });
      event.addEventListener('mouseleave', () => {
        event.classList.remove('active');
      });
    });
  }

}
