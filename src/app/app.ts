import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    PostCreateComponent,
    PostListComponent,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  storedPosts: Post[] = [];

  onPostAdded(post: Post) {
    this.storedPosts.push(post);
  }
}
