import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wordpress-headless';

  constructor(
    private translate: TranslateService,
    public language: LanguageService
  ) {
    translate.setDefaultLang(this.language.get());
  }
}
