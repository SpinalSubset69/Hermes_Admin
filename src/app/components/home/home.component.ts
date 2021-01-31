import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit(): void {
  }
  
  goToListArticles(){
    this._Router.navigate(['listArticles']);
  }
  goToForm(){
    this._Router.navigate(['upload']);
  }

}
