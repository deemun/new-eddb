import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-tab',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

export class AppTab implements OnInit {
  public tabs =  ['Tab1', 'Tab2', 'Tab3', 'Tab4'];
  public tabInput: FormGroup;

  constructor(private fb: FormBuilder) {}


  createTab(tabInput) {
    if (tabInput.isValid) {
      
    }
    
  }

  ngOnInit() {
    console.log('This is call before initalization');
    // Definig fb type.
    // FormGroup is collection of inputs
    // FormBuilder is use to put different collections of input together.
    this.tabInput = this.fb.group({
      tabValue: ['', Validators.required]
    });
  }
}

