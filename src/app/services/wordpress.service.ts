import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordpressService {
  private wpUrl = 'https://thecodeangle.com';

  constructor(private http: HttpClient) {}

  getPosts() {
    const url = `${this.wpUrl}/wp-json/wp/v2/posts`;

    return this.http.get(url);
  }
}
