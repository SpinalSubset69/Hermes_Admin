import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../service/articles.service';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.css']
})
export class EditarticleComponent implements OnInit {

  noticia:boolean = true;
  editar:boolean = false;
  article:any = {};
  id:string;
  title:string;
  summary:string;
  content:string;
  author:string;
  category:string;
  content_split:any;

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

  getImage(){
    return `http://localhost:3000/api/getImage/${this.article.image}`
  }

  updateArticle(){

  }



  constructor(private _ActivatedRoute: ActivatedRoute,
              private _ArticleService: ArticlesService) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this._ArticleService.getArticle(this.id).subscribe((response:any) => {
        this.article = response.article;
        this.content_split = response.article.content.split('\n');
        console.log(this.article);
        console.log(this.content_split);
      //Se escribe la nota en el cuerpo
      let container = document.getElementById('content');
      for(let i = 0; i < this.content_split.length; i++){
      let paragraph = document.createElement('p');
      paragraph.innerHTML = this.content_split[i];
      container.appendChild(paragraph);
    }
      })
    });
  }
}
