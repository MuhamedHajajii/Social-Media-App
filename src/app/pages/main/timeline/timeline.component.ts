import { Component, inject } from '@angular/core';
import { PostsService } from '../../../core/services/posts/posts.service';
import { IAllPosts } from '../../../core/interfaces/posts/IAllPosts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-timeline',
  imports: [DatePipe],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {
  allPosts!: IAllPosts;

  postsService = inject(PostsService);

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postsService.getAllPosts().subscribe({
      next: (response) => {
        console.log(response);
        this.allPosts = response;
      },
    });
  }
}
