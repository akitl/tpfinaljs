import { Ingredient} from './ingredient';

export class Recette {
    nom: string;
    desc: string;
    img: string;
    list: Array<Ingredient>;
  }