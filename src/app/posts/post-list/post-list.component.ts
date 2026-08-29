import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatExpansionModule, MatButton],
  templateUrl: './post-list.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {
  //     id: 1,
  //     title: 'First Post',
  //     content: 'This is the first post content.'
  //   },
  //   {
  //     id: 2,
  //     title: 'Second Post',
  //     content: 'This is the second post content.'
  //   }
  // ]
  posts: Post[] = [];
  private postsSub!: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
