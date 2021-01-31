import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ROUTER_MODULE } from './router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UploadarticleComponent } from './components/uploadarticle/uploadarticle.component';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';
import { UploadComponent } from './upload/upload.component';
import { ListarticlesComponent } from './components/listarticles/listarticles.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UploadarticleComponent,
    EditComponent,
    DeleteComponent,
    UploadComponent,
    ListarticlesComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    ROUTER_MODULE,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
