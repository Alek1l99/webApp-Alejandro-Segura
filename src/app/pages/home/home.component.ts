import { Component, OnInit } from '@angular/core';
import {backgoundList} from 'src/app/data/dataListMedia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  background = backgoundList ;

  ngOnInit(): void {
  }

}
