import { Component, HostListener } from '@angular/core';
import { backgoundList, techIcons } from 'src/app/data/dataListMedia';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  // Declaration of component properties
  background = backgoundList; // A list of backgrounds
  heightDevice: number; // A property to store the browser window's height

  isPopupOpen: boolean = false; // Variable to control if the popup is open
  popupInfo: any; // Variable to store specific circle information
  popupImages: any[] = []; // Array to store popup images

  applyBackgroundOpacity: boolean = false; // Initially without opacity

  skills = [
    { name: 'Front', label: 'Front-progress', progress: 70 },
    { name: 'Back', label: 'Back-progress', progress: 80 },
    { name: 'Design', label: 'Design-progress', progress: 60 },
    { name: 'Software', label: 'Software-progress', progress: 90 }
  ];

  // Specific information for each type of circle
  circleInfo: { [key: string]: { title: string; description: string[] } } = {
    Front: {
      title: 'Front-end',
      description: [
        'JavaScript.',
        'Typescript & Angular.',
        'HTML5 & CSS3.',
        'Bootsatrap & Tailwind.',
        'SEO Position.',
        'Responsive Design.'
      ]
    },
    Back: {
      title: 'Back-end',
      description: [
        'API Rest',
        'Net & Entity Framework',
        'Node & Express',
        'SQL & NoSQL',
        'MongoDB',
        'Microsoft SQL Server',
        'Server Management',
      ]
    },
    Design: {
      title: 'Design',
      description: [
        'HTML Canvas',
        'Adobe XD',
        'Figma',
        'Blender 3D',
        'Crocotile 3D',
      ]
    },
    Software: {
      title: 'Software',
      description: [
        'Git Version Control',
        'Command Line & SSH',
        'C# & MVC',
        'Scrum Methodology',
        'SOLID Principles',
        'NPM, NuGet, CLI'
      ]
    }
  };

  getProgressWidth(skillName: string): number {
    // Find the corresponding skill in the array and return its progress value
    const skill = this.skills.find(skill => skill.name === skillName);
    return skill ? skill.progress : 0; // Return the progress value or 0 if not found
  }

  // Constructor of the component
  constructor() {
    this.heightDevice = window.innerHeight; // Initialize the 'heightDevice' property with the current window's height
  }

  // Event handler triggered when the browser window is resized
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.heightDevice = event.target.innerHeight; // Update the 'heightDevice' property when a window size change occurs
  }

  ngOnInit(): void {
    // ngOnInit is a method called once the component has been initialized, but in this case, it does nothing.
  }

  openPopup(circleType: string) {
    console.log("This function works");
    // Check if the popup is not already open before opening it again
    if (!this.isPopupOpen) {
      this.isPopupOpen = true;
      this.popupInfo = this.circleInfo[circleType];
      this.popupImages = techIcons[circleType] || [];
      this.applyBackgroundOpacity = true; // Apply opacity to the background
    }
  }

  closePopup() {
    console.log("This message appears when the popup is closed, it works");
    // Check if the popup is open before attempting to close it
    if (this.isPopupOpen) {
      this.isPopupOpen = false;
      this.applyBackgroundOpacity = false; // Remove opacity from the background
    }
  }

  handleSkillsContainerClick(event: Event) {
    // Prevent the click event from propagating to the popup div
    event.stopPropagation();

    // Close the popup if it's open
    if (this.isPopupOpen) {
      this.closePopup();
    }
  }
}
