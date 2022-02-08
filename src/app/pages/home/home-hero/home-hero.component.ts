import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WordpressService } from 'src/app/services/wordpress.service';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
})
export class HomeHeroComponent implements OnInit {
  posts: any;
  playIcon: string = 'play';
  constructor(public modal: NgbModal, private wp: WordpressService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.wp.getPosts().subscribe((data) => {
      this.posts = data;
      console.log(data);
    });
  }

  openPlayer() {
    this.modal.open(VideoPlayerComponent, {
      size: 'lg',
      centered: true,
    });
  }
}
