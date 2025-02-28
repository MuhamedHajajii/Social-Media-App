import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WEB_SITE_BASE_URL } from '../../constants/WEB_SITE_BASE_URL';
import { ICreatePost } from '../../interfaces/posts/ICreatePost';
import { IAllPosts } from '../../interfaces/posts/IAllPosts';
import { IPostById } from '../../interfaces/posts/IPostById';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  // CRUD Operation

  // Create
  CreatePost(postData: FormData) {
    return this.http.post<ICreatePost>(`${WEB_SITE_BASE_URL}posts`, postData);
  }

  getAllPosts() {
    return this.http.get<IAllPosts>(`${WEB_SITE_BASE_URL}posts`);
  }
  getPostById(postId: string) {
    return this.http.get<IPostById>(`${WEB_SITE_BASE_URL}posts/${postId}`);
  }
  getUserPosts() {}
  updatePost() {}
  removePost() {}
}
