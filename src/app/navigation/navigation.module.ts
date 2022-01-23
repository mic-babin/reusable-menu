import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';

@NgModule({
  declarations: [MainNavComponent, MobileNavComponent],
  imports: [CommonModule],
  exports: [MainNavComponent],
})
export class NavigationModule {}
