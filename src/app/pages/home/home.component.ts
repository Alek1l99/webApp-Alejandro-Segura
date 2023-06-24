import { Component, OnInit, HostListener } from '@angular/core';
import {backgoundList} from 'src/app/data/dataListMedia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  background = backgoundList ;

  heightDevice:number;

  constructor() {
    this.heightDevice = window.innerHeight;
   }

   @HostListener('window:resize', ['$event'])
   onResize(event: any) {
     this.heightDevice = event.target.innerHeight;
   }


  ngOnInit(): void {
  }

}
