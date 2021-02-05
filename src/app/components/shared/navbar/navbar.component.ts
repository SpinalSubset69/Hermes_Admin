import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _Router: Router) { }

  ngOnInit(): void {
  }

  goHome(){
    this._Router.navigate(['home']);
  }

}
