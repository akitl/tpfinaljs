import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MonFrigoComponent } from './pages/mon-frigo/mon-frigo.component';
import { MesRecettesComponent } from './pages/mes-recettes/mes-recettes.component';
import { PlanificationComponent } from './pages/planification/planification.component';
import { MaListeDeCourseComponent } from './pages/ma-liste-de-course/ma-liste-de-course.component';
import { IngredientDetailComponent } from './pages/ingredient-detail/ingredient-detail.component';
import { NotificationsComponent } from './notifications/notifications.component';


import { AppRoutingModule } from './app-routing/app-routing.module';

import { IngredientService } from './ingredient.service';
import { NotificationService } from './notification.service';

@NgModule({
  declarations: [
    AppComponent,
    MonFrigoComponent,
    MesRecettesComponent,
    PlanificationComponent,
    MaListeDeCourseComponent,
    IngredientDetailComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [IngredientService,NotificationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
