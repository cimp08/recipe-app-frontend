import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'src/app/shared/list';
import { Recipe } from 'src/app/shared/recipe';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  id!: number;
  list!: List;
  recipies: Recipe[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public listService: ListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['listId'];

    this.listService.find(this.id).subscribe((data: List[]) => {
      this.list = data[0];
    });

    this.listService.getAllRecipies(this.id).subscribe((data: Recipe[]) => {
      this.recipies = data;
      console.log(this.recipies);
    });
  }

  /* deleteRecipe(id: number) {
    this.listService.deleteRecipe(id);
    console.log('List deleted successfully!');
  } */

  deleteRecipe(id: number) {
    this.listService.deleteRecipe(id).subscribe((res) => {
      this.recipies = this.recipies.filter((item) => item.id !== id);
      console.log('List deleted successfully!');
    });
  }
}
