import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    MatExpansionModule
  ],
  templateUrl: './post-list.component.html',
})
export class PostListComponent {
  posts = [
    {
      id: 1,
      title: 'First Post',
      content: 'This is the first post content.'
    },
    {
      id: 2,
      title: 'Second Post',
      content: 'This is the second post content.'
    }
  ]
}
