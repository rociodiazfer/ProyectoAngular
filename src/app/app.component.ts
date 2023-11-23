import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NgIfComponent} from "./carpeta-ng/ng-if/ng-if.component";
import {NgForComponent} from "./carpeta-ng/ng-for/ng-for.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgIfComponent, NgForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IgForIgIf';
}
