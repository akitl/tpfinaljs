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
  addDetailBool: boolean = false;

  ngOnInit() {
    this.getIngredients();
  }

  constructor(private IngredientService: IngredientService) { }


  onSelect(ing: Ingredient): void {
    this.selectedIng = ing;
  }

  onSelectDel(ing: Ingredient): void {
    this.IngredientService.delIngredients(ing);
  }

  getIngredients(): void {
    this.IngredientService.getIngredients()
        .subscribe(ings => this.ings = ings);
  }

  addDetail(): void{
    this.addDetailBool = true;    
  }

  ingredientAdd(): void{
    this.addDetailBool = false;    
  }

 
  add(): void{
    
      
  }


}
