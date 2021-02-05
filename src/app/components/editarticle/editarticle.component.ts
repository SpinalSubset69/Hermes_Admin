import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  image:any;
  popup:boolean = false;
  warning:boolean = false;
  imageName:string;
  imageLoaded:boolean = false;
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
    return `http://localhost:3000/api/getImage/${this.imageName}`
  }

  updateArticle(){
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
        category: this.category
      }
    this._ArticleService.modifyArticle(this.id, this.article).subscribe((response:any) => {
      console.log(response)
      if(response.status === 'Exitoso'){
        this._ArticleService.uploadImage(this.id, form).subscribe((response:any) => {
          if(response.status === 'Exitoso'){
            this.popup = true;
          }
        })
      }
    });
    }



  }

  flipEdit(){
    this.noticia = false;
    this.editar = true;
  }
  closePopUp(){
  this.popup = false;
  }

  closeWarning(){
  this.warning = false;
  }

  goList(){
    this._Router.navigate(['listArticles']);
  }



  constructor(private _ActivatedRoute: ActivatedRoute,
              private _ArticleService: ArticlesService,
              private _Router:Router) {}

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this._ArticleService.getArticle(this.id).subscribe((response:any) => {
        this.article = response.article;
        this.imageName = this.article.image;
        this.imageLoaded = true;
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
