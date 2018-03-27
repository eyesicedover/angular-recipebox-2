import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input() childRecipesList: Recipe[];
  show: number;
  myVar = false;

  toggleShow(i) {
    //click on new recipe
    if (i !== this.show) {
      this.show = i;
      this.myVar = true;
    } else {
      //click on same recipe again
      if (this.myVar === false) {
        this.myVar = true;
      } else {
        this.myVar = false;
      }
    }
  }


}
