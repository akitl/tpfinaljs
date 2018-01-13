import { Component, OnInit } from '@angular/core';

import { Ingredient} from '../../ingredient';

import { IngredientService } from '../../ingredient.service';
import { Recette } from '../../recette';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-mes-recettes',
  templateUrl: './mes-recettes.component.html',
  styleUrls: ['./mes-recettes.component.css']
})
export class MesRecettesComponent implements OnInit {

  ings : Ingredient[];
  recs : Recette[];
  recsFaisable : boolean[] = [];

  selectedRec: Recette;
  addDetailBool: boolean = false;

  ngOnInit() {
    this.getIngredients();
    this.getRecettes();
    this.getRecettesFaisable();
  }

  constructor(private IngredientService: IngredientService) {

   }

   onSelect(rec: Recette): void {
    this.selectedRec = rec;
  }

  onSelectDel(rec: Recette): void {
    this.IngredientService.delRecettes(rec);
  }
  
   getIngredients(): void {
    this.IngredientService.getIngredients()
        .subscribe(ings => this.ings = ings);
  }

  getRecettes(): void {
    this.IngredientService.getRecettes()
        .subscribe(recs => this.recs = recs);   
  }

  getRecettesFaisable(): void {
    this.recs.forEach((rec,i)=>{
      this.recsFaisable.push(true);
        rec.list.forEach((ingR,ii)=>{
          if(!this.IngredientService.getIngredientByName(ingR.nom)){
            this.recsFaisable[i]=false;
          }
        });
    });
  }
  
}
