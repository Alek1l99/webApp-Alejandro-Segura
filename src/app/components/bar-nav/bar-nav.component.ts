import { Component, OnInit } from '@angular/core';
import {dataListMenu, sgvIcons} from 'src/app/data/dataListMedia';

@Component({
  selector: 'app-bar-nav',
  templateUrl: './bar-nav.component.html',
  styleUrls: ['./bar-nav.component.css']
})
export class BarNavComponent implements OnInit {
  menuList = dataListMenu;
  icons = sgvIcons;

  constructor() { }

  ngOnInit(): void {
  }

}
