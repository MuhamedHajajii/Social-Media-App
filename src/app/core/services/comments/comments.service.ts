import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WEB_SITE_BASE_URL } from '../../constants/WEB_SITE_BASE_URL';
import { ICreateComments } from '../../interfaces/comments/ICreateComments';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}
  // CRUD
  createComment(comment: {}) {
    return this.http.post<ICreateComments>(
      `${WEB_SITE_BASE_URL}comments`,
      comment
    );
  }
}
