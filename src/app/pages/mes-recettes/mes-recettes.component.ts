import { Component, OnInit } from '@angular/core';

import { Ingredient} from '../../ingredient';

import { IngredientService } from '../../ingredient.service';

@Component({
  selector: 'app-mes-recettes',
  templateUrl: './mes-recettes.component.html',
  styleUrls: ['./mes-recettes.component.css']
})
export class MesRecettesComponent implements OnInit {

  ings : Ingredient[];

  ngOnInit() {
    this.getIngredients();
  }

  constructor(private IngredientService: IngredientService) {

   }

   getIngredients(): void {
    this.IngredientService.getIngredients()
        .subscribe(ings => this.ings = ings);
  }
  
}
