import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private _HttpClient: HttpClient) { }

  getAllNews(){
    return this._HttpClient.get('http://localhost:3000/api/getAllNews');
  }

  saveArticle(article:Article){
    const body:Article = {
      title: article.title,
      summary: article.summary,
      content: article.content,
      author: article.author,
      category: article.category
    }
    return this._HttpClient.put('http://localhost:3000/api/saveNew', body);
  }

  uploadImage(id, formdata){
    return this._HttpClient.post(`http://localhost:3000/api/uploadImage/${id}`, formdata);
  }

  getArticle(id){
    return this._HttpClient.get(`http://localhost:3000/api/getNew/${id}`)
  }
}

export interface Article{
  title: string,
  summary: string,
  content: string,
  author: string,
  category: string
}
