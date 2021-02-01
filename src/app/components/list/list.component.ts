import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() article;

  constructor(private _Router:Router) { }

  ngOnInit(): void {

  }
  getImage(){
    return `http://localhost:3000/api/getImage/${this.article.image}`
  }

  goToEdit(){
    this._Router.navigate(['edit', this.article._id]);
  }

}
