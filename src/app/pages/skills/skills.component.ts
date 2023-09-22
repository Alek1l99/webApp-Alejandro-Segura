import { Component, OnInit, HostListener } from '@angular/core';
import { backgoundList, images, techIcons } from 'src/app/data/dataListMedia';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  // Declaración de propiedades del componente
  background = backgoundList; // Una lista de fondos
  images = images; // Una lista de imágenes
  heightDevice: number; // Una propiedad para almacenar la altura de la ventana del navegador

  isPopupOpen: boolean = false; // Variable para controlar si el popup está abierto
  popupInfo: any; // Variable para almacenar la información específica del círculo
  popupImages: any[] = []; // Arreglo para almacenar las imágenes del popup

  applyBackgroundOpacity: boolean = false; // Inicialmente sin opacidad

  skills = [
    { name: 'Front', label: 'Front-progress', progress: 70 },
    { name: 'Back', label: 'Back-progress', progress: 80 },
    { name: 'Design', label: 'Design-progress', progress: 60 },
    { name: 'Software', label: 'Software-progress', progress: 90 }
  ];

  // Información específica para cada tipo de círculo
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
    // Busca la habilidad correspondiente en el arreglo y devuelve su valor de progreso
    const skill = this.skills.find(skill => skill.name === skillName);
    return skill ? skill.progress : 0; // Devuelve el valor de progreso o 0 si no se encuentra
  }

  // Constructor del componente
  constructor() {
    this.heightDevice = window.innerHeight; // Inicializa la propiedad 'heightDevice' con la altura actual de la ventana

  }

  // Manejador de eventos que se dispara cuando se redimensiona la ventana del navegador
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.heightDevice = event.target.innerHeight; // Actualiza la propiedad 'heightDevice' cuando se produce un cambio de tamaño en la ventana
  }

  ngOnInit(): void {
    // ngOnInit es un método que se llama una vez que el componente se ha inicializado, pero en este caso no hace nada.
  }

  openPopup(circleType: string) {
    console.log("esta mierda su func")
    // Verifica si el popup ya está abierto antes de abrirlo nuevamente
    if (!this.isPopupOpen) {
      this.isPopupOpen = true;
      this.popupInfo = this.circleInfo[circleType];
      this.popupImages = techIcons[circleType] || [];
      this.applyBackgroundOpacity = true; // Aplica la opacidad al fondo
    }
  }

  closePopup() {
    console.log("pero si sale esto al abrilo esta mierda nno funciona bviue")
    // Verifica si el popup está abierto antes de intentar cerrarlo
    if (this.isPopupOpen) {
      this.isPopupOpen = false;
      this.applyBackgroundOpacity = false; // Quita la opacidad del fondo
    }
  }

  handleSkillsContainerClick(event: Event) {
    // Evita que el clic se propague al div del popup
    event.stopPropagation();

    // Cierra el popup si está abierto
    if (this.isPopupOpen) {
      this.closePopup();
    }
  }
}
