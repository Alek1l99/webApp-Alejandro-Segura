// Importaciones de módulos y datos necesarios
import { Component, OnInit, HostListener } from '@angular/core';
import { backgoundList, images } from 'src/app/data/dataListMedia';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // Declaración de propiedades del componente
  background = backgoundList; // Una lista de fondos
  images = images; // Una lista de imágenes

  heightDevice: number; // Una propiedad para almacenar la altura de la ventana del navegador

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
}
