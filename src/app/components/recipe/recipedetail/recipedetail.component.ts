import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipe.service';
import { AuthService } from 'src/app/shared/auth.service';
import { List } from 'src/app/shared/list';
import { Recipe } from 'src/app/shared/recipe';
import { ListService } from 'src/app/shared/list.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

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
    public listService: ListService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.recipeService
      .getRecipe(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.recipe = data.recipe;
        console.log(this.recipe);
        return this.recipe;
      });

    if (this.authService.isLoggedIn) {
      this.listService
        .getAll(localStorage.getItem('user_id'))
        .subscribe((data: List[]) => {
          this.lists = data;
        });
    }

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
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
}
