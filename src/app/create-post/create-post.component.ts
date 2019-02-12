import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  postCreateTitle = '';
  postContent = '';
  @Output() postCreatedEvent = new EventEmitter();
  onCreatePost() {
    const post = {
      title : this.postCreateTitle,
      content : this.postContent
    };
    this.postCreatedEvent.emit(post);
  }
}
