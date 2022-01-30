import { Component, OnInit } from '@angular/core';
import * as data from '../data/socials';
import { Social } from '../models/social';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  socials: Social[] = data.socials;
  imgSrc?: string;
  year?: Number;
  constructor(public language: LanguageService) {}

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
}
