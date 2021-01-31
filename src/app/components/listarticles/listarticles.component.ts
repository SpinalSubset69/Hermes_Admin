import { Component, OnInit} from '@angular/core';
import { ArticlesService } from '../../service/articles.service';

@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent implements OnInit {
  allArticles:any = [];
  constructor(private _ArticlesService: ArticlesService) { }

  ngOnInit(): void {
    this._ArticlesService.getAllNews().subscribe((response:any) => {
      this.allArticles = response.news;
      console.log(this.allArticles)
    });
  }

}
