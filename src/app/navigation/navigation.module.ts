import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainNavComponent, MobileNavComponent, HamburgerComponent],
  imports: [CommonModule, RouterModule],
  exports: [MainNavComponent],
})
export class NavigationModule {}
