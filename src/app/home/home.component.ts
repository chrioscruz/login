import { Component, OnInit } from '@angular/core';
import { Pass1} from '../Pass1';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: Pass1;
  constructor() {

  }
  ngOnInit() {
    // this.user = new Pass1 () (user:'', password:'');
  }
}
