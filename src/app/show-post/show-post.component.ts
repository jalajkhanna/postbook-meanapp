import {Component, Input} from '@angular/core';

@Component({
  selector : 'app-show-post',
  templateUrl : './show-post.component.html',
  styleUrls : ['./show-post.component.css']
})
export class ShowPostComponent {
  @Input() posts = [/*
    {title : 'post1', content: 'this is post 1'},
    {title : 'post2', content: 'this is post 2'},
    {title : 'post3', content: 'this is post 3'}*/
  ];
}
