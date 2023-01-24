import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  Regsitration = new FormControl(' ')
  constructor() { }

  RegisterForm = new FormGroup({
    Name: new FormControl(''),
    designation :new FormControl(''),
  })

  ngOnInit(): void {
  }
  //To Submit Form
OnSubmit(): void {

}
// To cleare Form
clearForm(): void {
  
}
}
