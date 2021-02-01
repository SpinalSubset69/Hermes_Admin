import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ArticlesService, Article } from '../../service/articles.service';

@Component({
  selector: 'app-uploadarticle',
  templateUrl: './uploadarticle.component.html',
  styleUrls: ['./uploadarticle.component.css']
})
export class UploadarticleComponent implements OnInit {

title:string;
summary:string;
content:string;
author:string;
category:string;
image:any;
article: Article;
popup:boolean = false;
warning:boolean = false;

  constructor(private _Router:Router,
             private _ArticleService:ArticlesService) { }

  ngOnInit(): void {

  }

  onTitleChange(event){
    this.title = event.target.value;
    console.log(this.title);
  }

  onSummaryChange(event){
    this.summary = event.target.value;
    console.log(this.summary);
  }

  onContentChange(event){
    this.content = event.target.value;
    console.log(this.content);
  }

  onAuthorChange(event){
    this.author = event.target.value;
    console.log(this.author);
  }

  onCategoryChange(event){
    this.category = event.target.value;
    console.log(this.category);
  }

  submitArticle(){
    this.image = document.getElementById('input');
    let form = new FormData();
    form.set("image",this.image.files[0])
    console.log(this.image.files[0]);

    if(!this.title || !this.summary || !this.content || !this.image.files[0] || !this.author || !this.category){
      this.warning = true;
    }else{
      this.article = {
        title: this.title,
        summary: this.summary,
        content: this.content,
        author: this.author,
        category: this.category.toLowerCase()
      }
      this._ArticleService.saveArticle(this.article).subscribe((response:any) => {
        console.log(response);
        if(response.status === "Exitoso"){
          this._ArticleService.uploadImage(response.newStored._id, form).subscribe((response:any) =>{
            console.log(response);
            if(response.status === "Exitoso"){
              this.popup = true;
            }
          });
        }
      });
    }
  }
  closePopUp(){
    this.popup = false;
  }

  closeWarning(){
    this.warning = false;
  }


  goMenu(){
    this._Router.navigate(['home']);
  }
}
