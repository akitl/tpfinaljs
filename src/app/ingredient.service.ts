import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Ingredient } from './ingredient';
import { INGREDIENTS } from './mock-ingredient';
import { NotificationService } from './notification.service';

@Injectable()
export class IngredientService {

  ingredients : Ingredient[] = INGREDIENTS;

  constructor(private notifcationService: NotificationService) { }

  getIngredients(): Observable<Ingredient[]>  {
    this.notifcationService.add('IngredientService: fetched ingredient');
    return of(this.ingredients);
  }

  addIngredients(ing:Ingredient):void {
    this.ingredients.push(ing);
  }


}
