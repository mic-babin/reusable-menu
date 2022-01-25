import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  isOpened?: boolean;

  constructor() {}

  setState(isOpened: boolean) {
    console.log(isOpened);
    this.isOpened = isOpened;
    return this.isOpened;
  }

  getState() {
    return this.isOpened;
  }
}
