import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
})
export class HomeHeroComponent implements OnInit {
  playIcon: string = 'play';
  constructor(public modal: NgbModal) {}

  ngOnInit(): void {}

  openPlayer() {
    this.modal.open(VideoPlayerComponent, {
      size: 'lg',
      centered: true,
    });
  }
}
