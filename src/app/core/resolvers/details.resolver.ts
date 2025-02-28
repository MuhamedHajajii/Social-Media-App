import { ResolveFn } from '@angular/router';
import { PostsService } from '../services/posts/posts.service';
import { inject } from '@angular/core';
import { IPostById } from '../interfaces/posts/IPostById';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const detailsResolver: ResolveFn<IPostById> = (route, state) => {
  const postsService = inject(PostsService);
  const ngxSpinnerService = inject(NgxSpinnerService);

  ngxSpinnerService.show();

  return postsService.getPostById(route.paramMap.get('id')!).pipe(
    finalize(() => {
      ngxSpinnerService.hide();
    })
  );
};
