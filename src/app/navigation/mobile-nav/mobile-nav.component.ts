import { Component, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';
import * as data from '../data/menu';
import * as data2 from '../data/socials';
import { Social } from '../models/social';
import { Link } from '../models/link';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
})
export class MobileNavComponent implements OnInit {
  menu = data.menu;
  socials: Social[] = data2.socials;
  imgSrc?: string;
  year?: Number;
  constructor(public mobile: MobileService) {}

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
}
