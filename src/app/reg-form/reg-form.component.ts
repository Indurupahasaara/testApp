import { Component, OnInit } from '@angular/core';
import {FormControl,  } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  Regsitration = new FormControl(' ')
  constructor() { }

  ngOnInit(): void {
  }

}
