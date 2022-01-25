import { Component, OnInit } from '@angular/core';
import * as data from '../data/menu';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  menu = data.menu;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      let navbar = document.getElementById('navbar');
      if (window.pageYOffset > 50) {
        let change = () => {
          navbar?.classList.add('diminished');
        };
        change();
      } else {
        let revert = () => {
          navbar?.classList.remove('diminished');
        };
        revert();
      }
    });
  }
}
