import { RouterModule, Routes } from '@angular/router'

//Components
import { HomeComponent } from './components/home/home.component';
import { UploadarticleComponent } from './components/uploadarticle/uploadarticle.component';
import { ListarticlesComponent } from './components/listarticles/listarticles.component';
const ROUTER:Routes = [
    {path: 'home', component: HomeComponent},
    {path:'upload', component: UploadarticleComponent},
    {path: 'listArticles', component: ListarticlesComponent},
    {path: '**', pathMatch:'full', redirectTo: 'home'}
];

export const ROUTER_MODULE = RouterModule.forRoot(ROUTER, {useHash:true});
