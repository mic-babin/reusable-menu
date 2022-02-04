import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { PlayBtnComponent } from './play-btn/play-btn.component';

@NgModule({
  declarations: [HomeComponent, HomeHeroComponent, PlayBtnComponent],
  imports: [CommonModule, TranslateModule],
  exports: [HomeComponent],
})
export class HomeModule {}
