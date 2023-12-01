import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  slides = [
    {
      src: '../../../assets/resources/Avengers.png',
      img: '../../src/assets/resources/Avengers.png',
      alt: 'Avengers',
    },
    {
      src: '../../../assets/resources/Guardians of The Galaxy.png',
      img: 'https://mdbootstrap.com/img/Photos/Slides/2.webp',
      alt: 'Guardians of The Galaxy',
    },
    {
      src: '../../../assets/resources/Knives Out.png',
      img: 'https://mdbootstrap.com/img/Photos/Slides/3.webp',
      alt: 'Knives Out',
    },
    {
      src: '../../../assets/resources/Spider Man.png',
      img: 'https://mdbootstrap.com/img/Photos/Slides/4.webp',
      alt: 'Spider Man',
    },
    {
      src: '../../../assets/resources/Tenet.png',
      img: 'https://mdbootstrap.com/img/Photos/Slides/4.webp',
      alt: 'Tenet',
    },
  ];
}
