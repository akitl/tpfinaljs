import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Ingredient } from './ingredient';
import { INGREDIENTS } from './mock-ingredient';
import { RECETTES } from './mock-recette';
import { NotificationService } from './notification.service';
import { Recette } from './recette';

@Injectable()
export class IngredientService {

  constructor(private notifcationService: NotificationService) { }


  // gesstion des ingedients
  ingredients : Ingredient[] = INGREDIENTS;

  getIngredients(): Observable<Ingredient[]>  {
    //this.notifcationService.add('IngredientService: fetched ingredient');
    return of(this.ingredients);
  }

  getIngredientByName(nom: string): boolean  {
    let bo: boolean = false;
    this.ingredients.forEach((ing,i)=>{
      if (ing.nom == nom){
      
        bo = true;
      }
    });
    
    return bo;
    
  }

  addIngredients(ing:Ingredient):void {
    if (this.ingredients.indexOf(ing) >= 0){

    }else{
      this.ingredients.push(ing);
    }
  }

  delIngredients(ing:Ingredient):void {
    this.ingredients.splice(this.ingredients.indexOf(ing),1);
  }

// gestion des recettes 
  recettes : Recette[] = RECETTES;

  getRecettes(): Observable<Recette[]>  {
    //this.notifcationService.add('IngredientService: fetched ingredient');
    return of(this.recettes);
  }

  addRecettes(rec:Recette):void {
    if (this.recettes.indexOf(rec) >= 0){

    }else{
      this.recettes.push(rec);
    }
  }

  delRecettes(rec:Recette):void {
    this.recettes.splice(this.recettes.indexOf(rec),1);
  }


}
