import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {elementAt} from "rxjs";

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

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
  protected readonly elementAt = elementAt;
}
