import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {
  @Output() sendRecipe = new EventEmitter();

  submitForm(name: string, instructions: string, description: string, ingredients: string, tags: string, image: string) {

    let newRecipe: Recipe = new Recipe(name, instructions, description, [ingredients], [tags], image);
    //console.log(newRecipe)
    this.sendRecipe.emit(newRecipe);
  }

}
