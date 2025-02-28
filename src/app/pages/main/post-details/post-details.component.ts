import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../core/services/posts/posts.service';
import { IPostById } from '../../../core/interfaces/posts/IPostById';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-details',
  imports: [DatePipe],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent {
  activatedRoute = inject(ActivatedRoute);

  postsService = inject(PostsService);

  currentPost!: IPostById;

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data['hamada']);
    this.currentPost = this.activatedRoute.snapshot.data['hamada'];
    // this.getCurrentId();
  }

  // getCurrentId(): void {
  //   this.activatedRoute.paramMap.subscribe({
  //     next: (parm) => {
  //       console.log(parm.get('id'));
  //       this.getCurrentPost(parm.get('id')!);
  //     },
  //   });
  // }

  // getCurrentPost(id: string): void {
  //   this.postsService.getPostById(id).subscribe({
  //     next: (response) => {
  //       this.currentPost = response;
  //       console.log(response);
  //     },
  //   });
  // }
}
