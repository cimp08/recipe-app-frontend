import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipe.service';
import { AuthService } from 'src/app/shared/auth.service';
import { List } from 'src/app/shared/list';
import { Recipe } from 'src/app/shared/recipe';
import { ListService } from 'src/app/shared/list.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css'],
})
export class RecipedetailComponent implements OnInit {
  /* form!: FormGroup; */
  recipe!: any;
  lists: List[] = [];

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    public authService: AuthService,
    public listService: ListService
  ) {}

  ngOnInit(): void {
    this.recipeService
      .getRecipe(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.recipe = data.recipe;
        console.log(this.recipe);
        return this.recipe;
      });

    this.listService
      .getAll(localStorage.getItem('user_id'))
      .subscribe((data: List[]) => {
        this.lists = data;
        console.log(this.lists);
      });

    /* this.form = new FormGroup({
      recipe_api_id: new FormControl(''),
      label: new FormControl(''),
      photo_url: new FormControl(''),
      log_id: new FormControl(''),
    }); */
  }

  addRecipeToList(listId: number) {
    const recipeToPost = {
      recipe_api_id: this.recipe.uri.slice(44),
      label: this.recipe.label,
      photo_url: this.recipe.image,
      log_id: listId,
    };
    this.listService.saveRecipe(recipeToPost).subscribe((res: any) => {
      console.log('Recipe saved successfully!');
    });
  }

  /* submit() {
    console.log(this.form.value);
    this.listService.saveRecipe(this.form.value).subscribe((res: any) => {
      console.log('Recipe saved successfully!');
    });
  } */
}
