import { Component } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '01_Angular_empty';
  posts: Post[]
  error_appear: boolean
  post_height: number;

  constructor(){
    this.posts = []
    this.posts = [
      new Post('Test1', 'Hello World'),
    ]
    this.error_appear = false
    this.post_height = 470
  }

  add_posts(): Post[] {
    return this.posts;
  }

  submit_add_post(autore: HTMLInputElement, testo: HTMLTextAreaElement) {
    if (autore.value != '' && testo.value != ''){
      this.post_height = 470
      this.error_appear = false
      this.posts.push(new Post(autore.value, testo.value))
      autore.value = ''
      testo.value = ''
    }else{
      this.error_appear = true
      this.post_height = 470
    }
  }
}
