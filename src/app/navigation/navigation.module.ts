import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [MainNavComponent, MobileNavComponent, HamburgerComponent],
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [MainNavComponent],
})
export class NavigationModule {}
