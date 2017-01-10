import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.css']
})
export class Tabs {
  public tabs = ['Truma', 'Cardio', 'Kidney']

  constructor () {

  }
}
