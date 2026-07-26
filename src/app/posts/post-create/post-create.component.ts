import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'NO CONTENT';

  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
