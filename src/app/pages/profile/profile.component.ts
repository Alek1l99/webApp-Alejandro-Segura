import { Component, OnInit, HostListener } from '@angular/core';
import {backgoundList, images} from 'src/app/data/dataListMedia';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  background = backgoundList ;
  images = images;

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

