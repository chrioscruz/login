import { Component, OnInit } from '@angular/core';
import { Pass2} from '../Pass2';
import {Pass1} from '../Pass1';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: Pass2;
  constructor() {
  }
  ngOnInit() {
    // this.user = new Pass1 () (user:'', password:'');
  }
}
