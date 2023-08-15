import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {
  projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      thumbnail: 'https://via.placeholder.com/150x150'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      thumbnail: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      thumbnail: 'https://via.placeholder.com/150x150'
    }
  ];
}