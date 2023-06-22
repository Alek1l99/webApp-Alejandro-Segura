import { Component } from '@angular/core';
import {sgvIcons, backgoundList} from 'src/app/data/dataListMedia';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  background = backgoundList;
  icons=sgvIcons;
}
