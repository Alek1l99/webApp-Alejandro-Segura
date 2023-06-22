import { Component, OnInit, HostListener } from '@angular/core';
import {dataListMenu, sgvIcons} from 'src/app/data/dataListMedia';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {


  heightDevice:number;
  menuList = dataListMenu;
  icons = sgvIcons;

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
