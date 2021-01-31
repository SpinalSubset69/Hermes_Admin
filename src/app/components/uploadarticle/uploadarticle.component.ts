import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadarticle',
  templateUrl: './uploadarticle.component.html',
  styleUrls: ['./uploadarticle.component.css']
})
export class UploadarticleComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit(): void {
  }

  goMenu(){
    this._Router.navigate(['home']);
  }
}
