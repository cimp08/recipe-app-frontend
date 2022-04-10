import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/list.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    private http: HttpClient,
    public listService: ListService,
    private router: Router
  ) {}

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
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
    this.listService.create(this.form.value).subscribe((res: any) => {
      console.log('List created successfully!');
      this.router.navigateByUrl('list/index');
    });
  }
}
