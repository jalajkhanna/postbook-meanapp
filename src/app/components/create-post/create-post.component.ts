import { Component } from '@angular/core';

import {NgForm} from '@angular/forms';
import {PostsService} from '../../service/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  constructor( public postService : PostsService) {}


  onCreatePost( form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
