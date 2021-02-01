import { RouterModule, Routes } from '@angular/router'

//Components
import { HomeComponent } from './components/home/home.component';
import { UploadarticleComponent } from './components/uploadarticle/uploadarticle.component';
import { ListarticlesComponent } from './components/listarticles/listarticles.component';
import { EditarticleComponent } from './components/editarticle/editarticle.component';
const ROUTER:Routes = [
    {path: 'home', component: HomeComponent},
    {path:'upload', component: UploadarticleComponent},
    {path: 'listArticles', component: ListarticlesComponent},
    {path: 'edit/:id', component: EditarticleComponent},
    {path: '**', pathMatch:'full', redirectTo: 'home'}
];

export const ROUTER_MODULE = RouterModule.forRoot(ROUTER, {useHash:true});
