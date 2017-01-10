import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-tab',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

export class AppTab implements OnInit {
  public tabs =  ['Tab1', 'Tab2', 'Tab3', 'Tab4'];
 
}

