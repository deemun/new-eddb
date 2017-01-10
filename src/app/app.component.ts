import { Component } from '@angular/core';
import '../style/app.scss';

@Component({
  selector: 'eddb-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'welcome to eddb';
}
