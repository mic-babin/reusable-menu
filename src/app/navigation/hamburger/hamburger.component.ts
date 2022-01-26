import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { MobileService } from '../services/mobile.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent implements OnInit {
  isOpened = false;

  constructor(
    private mobile: MobileService,
    public language: LanguageService
  ) {}

  ngOnInit(): void {}

  toggleNav(isOpened: boolean) {
    let hamburger = document.getElementById('burger');
    hamburger?.classList.toggle('active');

    this.isOpened = !isOpened;
    this.mobile.setState(this.isOpened);
  }
}
