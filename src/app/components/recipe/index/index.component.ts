import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  searchForm!: FormGroup;
  recipes!: any[];

  constructor(
    private spinner: NgxSpinnerService,
    private recipeService: RecipeService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      result: ['', Validators.required],
      health: [''],
      dishType: [''],
    });
  }

  searchRecipies(form: FormGroup) {
    this.recipeService
      .getAllRecipies(form.value.result, form.value.health, form.value.dishType)
      .subscribe((data) => {
        this.recipes = data.hits.map((food: any) => food.recipe);
        console.log(this.recipes);
        return this.recipes;
      });
  }
}
