import { Component, OnInit } from '@angular/core';
import { images, dataDetailPortfolio } from 'src/app/data/dataListMedia';

interface CardDetail {
  background: { url: string, alt: string };
  preview: string;
  detail: string;
  url: string;
  isAnimating: boolean;
  isHovered: boolean;
  isClicked: boolean;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  imagesWebSite = images;
  cardDetails = dataDetailPortfolio;

  isClicked = false;

  selectedCardIndices: number[] = [-1, -1, -1];

  constructor() { }
  ngOnInit(): void {
    this.cardDetails.forEach(item => {
      item.isClicked = false;
    });
  }

  toggleCard(index: number, columnIndex: number, item: CardDetail) {

    item.isClicked = !item.isClicked;
    if (this.selectedCardIndices[columnIndex] === index) {
      this.selectedCardIndices[columnIndex] = -1; // Deselecciona la tarjeta si ya está seleccionada
    } else {
      this.selectedCardIndices[columnIndex] = index; // Selecciona la tarjeta haciendo clic en ella
    }
  }

}
