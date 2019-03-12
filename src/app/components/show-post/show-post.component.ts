import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../../model/post.model';
import {PostsService} from '../../service/posts.service';

@Component({
  selector : 'app-show-post',
  templateUrl : './show-post.component.html',
  styleUrls : ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit, OnDestroy {
  private postSub: Subscription;
  posts: Post[] = [/*
    {title : 'post1', content: 'this is post 1'},
    {title : 'post2', content: 'this is post 2'},
    {title : 'post3', content: 'this is post 3'}*/
  ];
  constructor(public postService: PostsService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postSub = this.postService.getPostUpdateListener().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }
}
