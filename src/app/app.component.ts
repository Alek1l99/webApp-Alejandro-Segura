import { Component, HostListener } from '@angular/core';
import { backgoundList } from 'src/app/data/dataListMedia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webApp-Alejandro-Segura';

  // Declaration of component properties
  background = backgoundList; // A list of backgrounds

  // Property to store the browser window's height
  heightDevice: number;

  // Constructor of the component
  constructor() {
    // Initialize the 'heightDevice' property with the current window's height
    this.heightDevice = window.innerHeight;
  }

  // Event handler triggered when the browser window is resized
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Update the 'heightDevice' property when a window size change occurs
    this.heightDevice = event.target.innerHeight;
  }
}
