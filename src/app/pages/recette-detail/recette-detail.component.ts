import { Component, OnInit , Input} from '@angular/core';

import { Recette } from '../../recette';
import { Ingredient } from '../../ingredient';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.component.html',
  styleUrls: ['./recette-detail.component.css']
})
export class RecetteDetailComponent implements OnInit {

  @Input() rec: Recette;
  ings: Ingredient[];

  constructor() { }

  getIngredients(): void {
    this.ings = this.rec.list;
  }
  ngOnInit() {
    this.getIngredients();
  }

}
