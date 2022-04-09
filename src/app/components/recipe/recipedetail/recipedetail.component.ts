import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css'],
})
export class RecipedetailComponent implements OnInit {
  recipe!: any;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipeService
      .getRecipe(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.recipe = data.recipe;
        console.log(this.recipe);
        return this.recipe;
      });
  }
}
