import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  baseUri = 'https://hermesarticles-backend.herokuapp.com/api/';

  constructor(private _HttpClient: HttpClient) { }

  getAllNews(){
    return this._HttpClient.get(`${this.baseUri}getAllNews`);
  }

  saveArticle(article:Article){
    const body:Article = {
      title: article.title,
      summary: article.summary,
      content: article.content,
      author: article.author,
      category: article.category
    }
    return this._HttpClient.put(`${this.baseUri}saveNew`, body);
  }

  uploadImage(id, formdata){
    return this._HttpClient.post(`${this.baseUri}uploadImage/${id}`, formdata);
  }

  getArticle(id){
    return this._HttpClient.get(`${this.baseUri}getNew/${id}`)
  }

  modifyArticle(id, article:Article){
    const body:Article = {
      title: article.title,
      summary: article.summary,
      content: article.content,
      author: article.author,
      category: article.category
    }
  return this._HttpClient.put(`${this.baseUri}modify/${id}`, body);
  }
}

export interface Article{
  title: string,
  summary: string,
  content: string,
  author: string,
  category: string
}
