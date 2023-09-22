import { Component, OnInit } from '@angular/core';
import { images } from 'src/app/data/dataListMedia';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // Declaration of component properties
  image = images; // A list of images

  ngOnInit(): void {
    // ngOnInit is a method that is called once the component has been initialized, but in this case, it doesn't do anything.
  }
}
