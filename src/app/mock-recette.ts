import { Ingredient} from './ingredient';
import { Recette} from './recette';


export const RECETTES: Recette[] = [
     { nom: "Poulet au curry(Riz)", desc: "un délicieux poulet au curry sur un lit de pate", img: "pouletCurryRiz.jpg" , list:[ { nom: "curry", quantite: 1, unite: 1 },{ nom: "riz", quantite: 1, unite: 1 },{ nom: "poulet", quantite: 1, unite: 1 },{ nom: "poivron", quantite: 1, unite: 1 }]},
     { nom: "Poulet au curry(Pate)", desc: "un délicieux poulet au curry sur un lit de riz", img: "pouletCurryPate.jpg" , list:[ { nom: "curry", quantite: 1, unite: 1 },{ nom: "pate", quantite: 1, unite: 1 },{ nom: "poulet", quantite: 1, unite: 1 },{ nom: "poivron", quantite: 1, unite: 1 }]},
];



