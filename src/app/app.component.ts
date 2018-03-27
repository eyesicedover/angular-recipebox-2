import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Your Recipe Book';
  recipes: Recipe[] = [
    new Recipe("Green Eggs and Ham", "Take two eggs and cook them in a pan set on medium heat. When they are done, put them on a plate and dollop pesto on top. Cook a few slices of Canadian bacon in the pan and serve next to the eggs. Serve with your preferred bread.", "Eggs with pesto served with Canadian bacon and a slice of bread. Serve with rice to make gluten-free.", ["eggs", "pesto", "olive oil", "ham", "salt", "pepper", "bread"], ["breakfast", "dairy-free", "gluten-free option"]),
    new Recipe("Mexican Steak Tacos", "Marinate flank steak with spices overnight. Cut into small cubes and saute on high heat until browned. Reserve meat in warm oven. Steam two corn tortillas and stack on top of each other. Make a small dice of a white onion and cut cilantro into similar size. Add meat to tortillas and top generously with onion and cilantro. Serve next to rice and beans, garnish with a slice of lime.", "Steak tacos served on corn tortillas and topped with onion and cilantro.", ["steak", "corn tortillas", "onion", "cilantro"], ["mexican", "gluten-free option", "dairy-free"])
  ];
}
