import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/list.service';
import { List } from 'src/app/shared/list';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  lists: List[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public listService: ListService) {}

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.listService
      .getAll(localStorage.getItem('user_id'))
      .subscribe((data: List[]) => {
        this.lists = data;
        console.log(this.lists);
      });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteList(id: number) {
    this.listService.delete(id).subscribe((res) => {
      this.lists = this.lists.filter((item) => item.id !== id);
      console.log('List deleted successfully!');
    });
  }
}
