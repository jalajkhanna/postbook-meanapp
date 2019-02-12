import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-app';
  allPosts = [];
  onCreatePost(post) {
    this.allPosts.push(post);
  }
}
