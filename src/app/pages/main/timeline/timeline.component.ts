import { afterNextRender, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { PostsService } from '../../../core/services/posts/posts.service';
import { IAllPosts, Post } from '../../../core/interfaces/posts/IAllPosts';
import { DatePipe } from '@angular/common';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { CommentsService } from '../../../core/services/comments/comments.service';
import { initFlowbite } from 'flowbite';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-timeline',
  imports: [
    DatePipe,
    InfiniteScrollDirective,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {
  isLoading: boolean = false;

  allPosts!: IAllPosts;

  postsService = inject(PostsService);

  fb = inject(FormBuilder);

  commentsService = inject(CommentsService);

  skeleton: number[] = [0, 1, 2, 3, 4, 5, 6];

  counter: number = 1;

  postContent: string = '';

  constructor() {
    afterNextRender(() => {
      initFlowbite();
    });
  }

  ngOnInit(): void {
    this.getAllPosts();
    this.initForm();
  }

  postFile!: File;

  onFileSelect(event: any): void {
    this.postFile = event.target.files[0];
  }

  createPost(): void {
    const formData = new FormData();
    formData.append('body', this.postContent);
    formData.append('image', this.postFile);

    this.postsService.CreatePost(formData).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }

  getAllPosts(): void {
    this.postsService.getAllPosts().subscribe({
      next: (response) => {
        console.log(response);
        this.allPosts = response;
      },
    });
  }

  onScroll() {
    this.isLoading = true;
    this.counter++;
    console.log('scrolled!!');
    this.postsService.getAllPosts(this.counter).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log(response);
        this.allPosts.posts.push(...response.posts);
      },
    });
  }

  commentForm!: FormGroup;

  initForm(): void {
    this.commentForm = this.fb.group({
      content: [null],
      post: [null],
    });
  }

  isCommentLoading: boolean = false;
  submitComment(post: Post): void {
    this.isCommentLoading = true;

    this.commentForm.get('post')?.patchValue(post.id);
    console.log(this.commentForm.value);
    this.commentsService.createComment(this.commentForm.value).subscribe({
      next: (response) => {
        console.log(response);
        post.comments = response.comments;
        this.isCommentLoading = false;
      },
      error: () => {
        this.isCommentLoading = false;
      },
    });
  }
}
