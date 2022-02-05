import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { PlayBtnComponent } from './play-btn/play-btn.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { VideoPlayerModule } from './video-player/video-player.module';

@NgModule({
  declarations: [HomeComponent, HomeHeroComponent, PlayBtnComponent],
  imports: [CommonModule, TranslateModule, NgbModalModule, VideoPlayerModule],
  exports: [HomeComponent],
})
export class HomeModule {}
