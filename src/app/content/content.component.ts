import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})

export class AppContent {
  public content: string =  'this is testing if content component shows.';

  constructor() {
  }
}

