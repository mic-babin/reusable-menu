import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import * as data from '../data/menu';
import { Link } from '../models/link';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  menu = data.menu;

  constructor(public language: LanguageService) {}

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
