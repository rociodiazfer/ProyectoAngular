import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  show: boolean = true
  user = {
    id : 1,
    name: "Ramesh"
  };
  a = true;
  b = false;

  users = [{
    id: 100,
    firstName: "Ramesh",
    lastName: "Fadatare",
    emailId: "ramesh@gmail.com"
  },
    {
      id: 101,
      firstName: "Tony",
      lastName: "Stark",
      emailId: "tony@gmail.com"
    }, {
      id: 100,
      firstName: "Tom",
      lastName: "Cruise",
      emailId: "tom@gmail.com"
    }];
}
