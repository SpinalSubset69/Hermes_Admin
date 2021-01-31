import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private _HttpClient: HttpClient) { }

  getAllNews(){
    return this._HttpClient.get('http://localhost:3000/api/getAllNews');
  }
}
