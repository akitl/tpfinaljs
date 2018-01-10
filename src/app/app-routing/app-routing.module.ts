import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { MonFrigoComponent } from '../pages/mon-frigo/mon-frigo.component';
import { MesRecettesComponent } from '../pages/mes-recettes/mes-recettes.component';
import { PlanificationComponent } from '../pages/planification/planification.component';
import { MaListeDeCourseComponent } from '../pages/ma-liste-de-course/ma-liste-de-course.component';


const routes: Routes = [
    {path: '', component: MonFrigoComponent},
    {path: 'recettes', component: MesRecettesComponent},
    {path: 'planification', component: PlanificationComponent},
    {path: 'liste', component: MaListeDeCourseComponent} 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
