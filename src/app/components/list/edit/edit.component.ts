import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'src/app/shared/list';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id!: number;
  list!: List;
  form!: FormGroup;

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

    this.form = new FormGroup({
      user_id: new FormControl(localStorage.getItem('user_id')),
      title: new FormControl('', Validators.required),
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f() {
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit() {
    console.log(this.form.value);
    this.listService.update(this.id, this.form.value).subscribe((res: any) => {
      console.log('List updated successfully!');
      this.router.navigateByUrl('list/index');
    });
  }
}
