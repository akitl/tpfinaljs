import { Component, OnInit } from '@angular/core';

import { Ingredient} from '../../ingredient';

import { IngredientService } from '../../ingredient.service';

@Component({
  selector: 'app-mon-frigo',
  templateUrl: './mon-frigo.component.html',
  styleUrls: ['./mon-frigo.component.css']
})
export class MonFrigoComponent implements OnInit {

  ings : Ingredient[];

  selectedIng: Ingredient;

  ngOnInit() {
    this.getIngredients();
  }

  constructor(private IngredientService: IngredientService) { }


  onSelect(ing: Ingredient): void {
    this.selectedIng = ing;
  }

  getIngredients(): void {
    this.IngredientService.getIngredients()
        .subscribe(ings => this.ings = ings);
  }

  ingTest: Ingredient = { nom: "tata", quantite: 5, unite: 1 };
  add(): void{
    
    this.IngredientService.addIngredients(this.ingTest)    
  }


}
